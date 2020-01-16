import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as Kinvey from "kinvey-nativescript-sdk";

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
  isLoading = false;
  listLoaded = false;

  //username: any = Kinvey.User.getActiveUser();
  username: string = "Aoife";

  constructor(private userProfileSerive: UserProfileSerive) {}

  ngOnInit(): void {
    this.isLoading = true;
        this.userProfileSerive.load()
            .subscribe(loadedGroceries => {
                loadedGroceries.forEach((groceryObject) => {
                    this.profile.unshift(groceryObject);
                });
                this.isLoading = false;
                this.listLoaded = true;
            });
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  updateName() {
      dialogs.prompt({
        title: "Update Name",
        message: "Change your username",
        okButtonText: "Confirm",
        cancelButtonText: "Cancel",
        defaultText: "",
        inputType: dialogs.inputType.text
    }).then(result => {
        this.username = result.text;
    });
  }

}