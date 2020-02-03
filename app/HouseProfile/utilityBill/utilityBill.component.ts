import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import { TransactionsService } from "../../shared/transactions/transactions.service";

@Component({
    selector: "gr-utilityBill",
    templateUrl: "./utilityBill.component.html",
    styleUrls: ["./utilityBill.component.css"],
    providers: [TransactionsService]
})
export class UtilityBillComponent {

    transactions = [];
    transactionsNotPaid = [];
    paid = false;
    notPaid = false;

    constructor(private transactionsService: TransactionsService) {
        this.transactionsService.getUtilityBill().subscribe((data) => {
            this.transactions = data;
            if(this.transactions.length > 0) {
                this.paid = true;
            }
        }, () => {
            alert({
                title: "Transactions",
                message: "An error occurred retrieving your data"
            });
        });

        this.transactionsService.getUtilityBillNotPaid().subscribe((data) => {
            this.transactionsNotPaid = data;
            if(this.transactionsNotPaid.length > 0) {
                this.notPaid = true;
            }
        }, () => {
            alert({
                title: "Transactions Not Paid",
                message: "An error occurred retrieving your data"
            });
        });
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}