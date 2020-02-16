import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";


@Component({
    selector: "gr-HouseProfile",
    templateUrl: "./HouseProfile.component.html",
    styleUrls: ["./HouseProfile.component.css"]
})
export class HouseProfileComponent {


    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}