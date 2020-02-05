import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
    selector: "gr-addBill",
    templateUrl: "./addBill.component.html",
    styleUrls: ["./addBill.component.css"]
})
export class AddBillComponent {

    constructor() {}

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}