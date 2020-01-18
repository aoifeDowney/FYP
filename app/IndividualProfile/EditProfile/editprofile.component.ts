import { Component, OnInit, Input } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as Kinvey from "kinvey-nativescript-sdk";

import { ListViewEventData, RadListView } from "nativescript-ui-listview";

import { UserProfile } from "../../shared/userprofile/userprofile.model";
import { UserProfileSerive } from "../../shared/userprofile/userprofile.service";


@Component({
  selector: "gr-profile",
  templateUrl: "./editprofile.component.html",
  styleUrls: ["./editprofile.component.css"],
  providers: [UserProfileSerive]
})

export class EditProfileComponent implements OnInit {

  profile: Array<UserProfile> = [];

  //username: any = Kinvey.User.getActiveUser();
  username: string = "Aoife";
  currentID: string;

  constructor(private userProfileSerive: UserProfileSerive) {}

  ngOnInit(): void {
        this.loadProfile();
  }

  loadProfile() {
    this.userProfileSerive.load()
            .subscribe(loadedProfile => {
              loadedProfile.forEach((profileObject) => {
                    this.profile.unshift(profileObject);
                });
            });
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  updateName() {
      dialogs.prompt({
        title: "Update Name",
        message: this.currentID,
        okButtonText: "Confirm",
        cancelButtonText: "Cancel",
        defaultText: "",
        inputType: dialogs.inputType.text
    }).then(result => {
      let profileObj = new UserProfile(null, result.text);
      this.userProfileSerive.update(profileObj);
      //this.loadProfile();
    });
  }

}