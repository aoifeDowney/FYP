import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Router } from "@angular/router";

import * as email from "nativescript-email";
import * as Kinvey from "kinvey-nativescript-sdk";

import { TransactionsService } from "../../shared/transactions/transactions.service";

@Component({
  selector: "gr-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
  providers: [TransactionsService]
})
export class ProfileComponent implements OnInit {

    activeUser = Kinvey.User.getActiveUser();
    userData = ​Kinvey.User.getActiveUser().data;
    userName = this.activeUser.username;
    houseName = this.userData["household"];

    icons = [];
    icon: string;

    toEmail = "email";
    ccEmail;
    bccEmail;
    subject = " HouseShare App Invitation"
    message = " Hello,\n\n" + "You have been invited to join a HouseShare group! The invitation was sent to you by your housemate "
                + this.userName + ". If you wish to join the group please download the HouseShare app from the App Store.\n\n"
                + "When registering make sure to register with your specific house group name which was"
                + " created. The house group name is: " + this.houseName + ".\nWe look forward to welcoming you to the HouseShare Team!"
                + "\n\nYours Sincerely," + "\nThe HouseShare Team";

  constructor(private router: Router, private transactionsService :TransactionsService) {}

  ngOnInit(): void {
    this.transactionsService.getIcon().subscribe((data) => {
      this.icons.push(data);
      for(let i = 0; i < this.icons.length; i++) {
        this.icon = this.icons[0][i]["icon"];
        //this.icon = "~/images/avatars/avatars/png/003-girl-2.png";
        console.log("Icon: " + this.icon);
      }
      
  }, () => {
      console.log("Unable to retrive list of transactions");
  });
  }

  onEmailSend(): void {
   
    email.compose({
        subject: this.subject,
        body: this.message,
        to: [this.toEmail],
        cc: [this.ccEmail ? this.ccEmail : ' '],
        bcc: [this.bccEmail ? this.bccEmail : ' ']
    }).then(() => {
        setTimeout(() => {
            this.clearFields();
        }, 5000);
    }, err => {
        this.clearFields();
        alert("Error: " + err);
    });
}

clearFields(): void {
    this.toEmail = '';
    this.ccEmail = '';
    this.bccEmail = '';
    this.subject = '';
    this.message = '';
}


  chooseIcon() {
    this.router.navigate(["/EditProfile"]);
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}