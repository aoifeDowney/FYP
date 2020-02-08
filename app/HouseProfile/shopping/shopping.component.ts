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
    @Output() itemNameEvent = new EventEmitter<string>();

    transactions = [];
    suggestions = [];
    itemsBought = false;
    suggestedItems = false;

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

    getItemName(name: string) {
        //console.log(name);
        //this.messageEvent.emit(this.message)
        this.itemName = name;
        

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}