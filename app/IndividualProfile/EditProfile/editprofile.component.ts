import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
  selector: "gr-profile",
  templateUrl: "./editprofile.component.html",
  styleUrls: ["./editprofile.component.css"]
})

export class EditProfileComponent implements OnInit {

  username: string = "Aoife";

  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
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