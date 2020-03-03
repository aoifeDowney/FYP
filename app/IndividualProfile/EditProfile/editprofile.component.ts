import { Component, OnInit, Input } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as Kinvey from "kinvey-nativescript-sdk";

import { TransactionsService } from "../../shared/transactions/transactions.service";

@Component({
  selector: "gr-editprofile",
  templateUrl: "./editprofile.component.html",
  styleUrls: ["./editprofile.component.css"],
  providers: [TransactionsService]
})

export class EditProfileComponent implements OnInit {

  activeUser = Kinvey.User.getActiveUser();
  userData = Kinvey.User.getActiveUser().data;

  tasks = [];
  textFieldValue = "";
  icons = [];
  id: string;

  icon1 = "~/images/avatars/avatars/png/001-girl.png";
  icon2 = "~/images/avatars/avatars/png/015-girl-14.png";
  icon3 = "~/images/avatars/avatars/png/003-girl-2.png";
  icon4 = "~/images/avatars/avatars/png/004-girl-3.png";
  icon5 = "~/images/avatars/avatars/png/005-girl-4.png";
  icon6 = "~/images/avatars/avatars/png/034-girl-21.png";
  icon7 = "~/images/avatars/avatars/png/007-girl-6.png"
  icon8 = "~/images/avatars/avatars/png/008-girl-7.png";
  icon9 = "~/images/avatars/avatars/png/043-man-10.png";
  icon10 = "~/images/avatars/avatars/png/022-man-1.png";
  icon11 = "~/images/avatars/avatars/png/035-boy-5.png";
  icon12 = "~/images/avatars/avatars/png/024-boy-1.png";
  icon13 = "~/images/avatars/avatars/png/044-boy-8.png";
  icon14 = "~/images/avatars/avatars/png/039-man-7.png";
  icon15 = "~/images/avatars/avatars/png/041-man-8.png";

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit(): void {
    this.transactionsService.getIcon().subscribe((data) => {
      this.icons.push(data);
      for (let i = 0; i < this.icons.length; i++) {
        this.id = this.icons[0][i]["_id"];
        console.log("Icon: " + this.id);
      }

    }, () => {
      console.log("Unable to retrive list of transactions");
    });
  }

  changeIcon(icon: string) {
    var task = {
      _id: this.id,
      userName: this.activeUser.username,
      user: true,
      houseName: this.userData["household"],
      icon: icon
    };

    this.transactionsService.save(task).then((newTask) => {
      this.tasks.unshift(newTask);
    });
    dialogs.alert({
      title: "Saved!",
      message: "Your profile icon has been set",
      okButtonText: "Okay"
    })
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}