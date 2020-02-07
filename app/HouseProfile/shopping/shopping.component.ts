import { Component, OnInit, Input } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import { TransactionsService } from "../../shared/transactions/transactions.service";

@Component({
    selector: "gr-shopping",
    templateUrl: "./shopping.component.html",
    styleUrls: ["./shopping.component.css"],
    providers: [TransactionsService]
})
export class ShoppingComponent {

    itemName: string;
    transactions = [];
    suggestions = [];
    itemsBought = false;
    suggestedItems = false;

    constructor(private transactionsService: TransactionsService) {}

    ngOnInit(): void {
        this.transactionsService.getHouseShop().subscribe((data) => {
            this.transactions = data;
        }, () => {
            alert({
                title: "Transactions",
                message: "An error occurred retrieving your data"
            });
        });
    }

    getItemName(name: string) {
        this.itemName = name;
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}