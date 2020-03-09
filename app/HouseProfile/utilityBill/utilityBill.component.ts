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

    constructor(private transactionsService: TransactionsService) {}

    ngOnInit(): void {
        this.transactionsService.getUtilityBill().subscribe((data) => {
            this.transactions = data;
            if(this.transactions.length > 0) {
                this.paid = true;
            }
        }, () => {
            console.log("Unable to retrive list of transactions");
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}