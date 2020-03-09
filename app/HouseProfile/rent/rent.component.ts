import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as dialogs from "tns-core-modules/ui/dialogs";

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
    paid = false;
    notPaid = false;

    constructor(private transactionsService: TransactionsService) {}

    ngOnInit(): void {
        this.transactionsService.getRent().subscribe((data) => {
            this.transactions = data;
            if(this.transactions.length > 0) {
                this.paid = true;
            } else {
                this.paid = false;
            }
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