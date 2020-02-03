import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import { TransactionsService } from "../../shared/transactions/transactions.service";

@Component({
    selector: "gr-rent",
    templateUrl: "./rent.component.html",
    styleUrls: ["./rent.component.css"],
    providers: [TransactionsService]
})
export class RentComponent {

    transactions = [];
    transactionsNotPaid = [];

    constructor(private transactionsService: TransactionsService) {}

    ngOnInit(): void {
        this.transactionsService.getRent().subscribe((data) => {
            this.transactions = data;
        }, () => {
            alert({
                title: "Transactions",
                message: "An error occurred retrieving your data"
            });
        });

        this.transactionsService.getRentNotPaid().subscribe((data) => {
            this.transactionsNotPaid = data;
        }, () => {
            alert({
                title: "Transactions Not Paid",
                message: "An error occurred retrieving your data"
            });
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}