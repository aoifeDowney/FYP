import { Component, OnInit, EventEmitter, Output  } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import { TransactionsService } from "../../shared/transactions/transactions.service";
import { ShoppingService } from "../shopping/shared/shopping.service";

@Component({
    selector: "gr-shopping",
    templateUrl: "./shopping.component.html",
    styleUrls: ["./shopping.component.css"],
    providers: [TransactionsService, ShoppingService]
})
export class ShoppingComponent {

    itemName: string;
    boughtBy: string;
    transactions = [];
    itemDetail = false;


    constructor(private transactionsService: TransactionsService, private shoppingService: ShoppingService) {}

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

    getItemDetail(name: string, boughtBy: string) {
        this.itemName = name;
        this.boughtBy = boughtBy;
        this.itemDetail = true;
    }

    do() {
        console.log("HI");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}