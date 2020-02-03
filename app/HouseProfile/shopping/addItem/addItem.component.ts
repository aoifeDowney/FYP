import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
@Component({
    selector: "gr-utilityBill",
    templateUrl: "./addItem.component.html",
    styleUrls: ["./addItem.component.css"]
})
export class AddItemComponent {

    constructor() {}

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}