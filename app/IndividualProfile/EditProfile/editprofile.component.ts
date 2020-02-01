import { Component, OnInit, Input } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as Kinvey from "kinvey-nativescript-sdk";

import { ListViewEventData, RadListView } from "nativescript-ui-listview";

import { UserProfile } from "../../shared/userprofile/userprofile.model";
import { UserProfileSerive } from "../../shared/userprofile/userprofile.service";


@Component({
  selector: "gr-editprofile",
  templateUrl: "./editprofile.component.html",
  styleUrls: ["./editprofile.component.css"],
  providers: [UserProfileSerive]
})

export class EditProfileComponent implements OnInit {

  profile: Array<UserProfile> = [];

  //username: any = Kinvey.User.getActiveUser();
  //username: string;

  tasks = [];
  textFieldValue = "";
  activeUser = Kinvey.User.getActiveUser();

  constructor(private userProfileSerive: UserProfileSerive) {}

  ngOnInit(): void {
    this.userProfileSerive.get().subscribe((data) => {
        this.tasks = data;
    }, () => {
        alert({
            title: "Tasks",
            message: "An error occurred retrieving your data"
        });
    });
}

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  save() {
    var task = {
      Username: this.textFieldValue
    };

    this.userProfileSerive.save(task).then((newTask) => {
      this.tasks.unshift(newTask);
    })
    this.textFieldValue = "";
  }


  updateName(task) {
      dialogs.prompt({
        title: "Update Name",
        okButtonText: "Confirm",
        cancelButtonText: "Cancel",
        defaultText: "",
        inputType: dialogs.inputType.text
    }).then(result => {
      const index = this.tasks.indexOf(task);
      this.tasks[index].Username = result.text;
      this.userProfileSerive.save(task);
    });
  }

}