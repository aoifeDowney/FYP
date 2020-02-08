import { Component, OnInit, Input } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import { TransactionsService } from "../../../shared/transactions/transactions.service";
import { ShoppingService } from "../shared/shopping.service";

@Component({
    selector: "listDetail",
    templateUrl: "./listDetail.component.html",
    styleUrls: ["./listDetail.component.css"],
    providers: [TransactionsService,ShoppingService]
})
export class ListDetailComponent {


    items = [];
    itemName: string;

    constructor(private shoppingService: ShoppingService, private transactionsService: TransactionsService) {}

    ngOnInit(): void {
        this.transactionsService.getListDetail(this.itemName).subscribe((data) => {
            this.items = data;
        }, () => {
            alert({
                title: "List Detail",
                message: "An error occurred retrieving your data"
            });
        });
    }

    doSomething() {
        console.log("Here!");
    }

    getName(name: string) {
        this.itemName = name;
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}