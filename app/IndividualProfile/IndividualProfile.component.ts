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
            { name: "Aoife", ammount: 90 },
            { name: "Auto & Transport", ammount: 76 },
            { name: "Communication", ammount: 60 },
            { name: "Hotel", ammount: 44 }
        ]
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
