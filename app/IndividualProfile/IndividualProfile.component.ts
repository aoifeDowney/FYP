import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
    selector: "gr-IndividualProfile",
    templateUrl: "./IndividualProfile.component.html",
    styleUrls: ["./IndividualProfile.component.css"]
})
export class IndividualProfileComponent implements OnInit {


    expensesChartData = [];

    constructor() {

        this.expensesChartData = [
            { name: "Rent", ammount: 90 },
            { name: "Utility Bills", ammount: 76 },
            { name: "House Shop", ammount: 60 }
        ]
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
