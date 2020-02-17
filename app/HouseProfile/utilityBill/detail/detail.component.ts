import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import { TransactionsService } from "../../../shared/transactions/transactions.service";

@Component({
    selector: "gr-detail",
    templateUrl: "./detail.component.html",
    styleUrls: ["./detail.component.css"],
    providers: [TransactionsService]
})
export class DetailComponent {

    transactions = [];

    constructor(private transactionsService: TransactionsService) {}

    ngOnInit(): void {
        this.transactionsService.getAllUtilityBills().subscribe((data) => {
            this.transactions = data;
        }, () => {
            alert({
                title: "Transactions",
                message: "An error occurred retrieving your data"
            });
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}