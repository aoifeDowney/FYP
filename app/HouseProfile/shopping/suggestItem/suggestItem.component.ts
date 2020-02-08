import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import { TransactionsService } from "../../../shared/transactions/transactions.service";

@Component({
    selector: "gr-suggestItem",
    templateUrl: "./suggestItem.component.html",
    styleUrls: ["./suggestItem.component.css"],
    providers: [TransactionsService]
})
export class SuggestItemComponent {

    transactions = [];

    constructor(private transactionsService: TransactionsService) {}

    ngOnInit(): void {
        this.transactionsService.getSuggestedItem().subscribe((data) => {
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