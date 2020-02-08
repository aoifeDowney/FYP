import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import { TransactionsService } from "../../../shared/transactions/transactions.service";

@Component({
    selector: "gr-addItem",
    templateUrl: "./addItem.component.html",
    styleUrls: ["./addItem.component.css"],
    providers: [TransactionsService]
})
export class AddItemComponent {

    nameValue = "";
    items = [];

    constructor(private transactionsService: TransactionsService) {}

    ngOnInit(): void {
    }

    suggestItem() {
        var task = {
            name: this.nameValue,
            type: "House Shop",
            user: "Aoife",
            bought: false,
            complete: false
        };

        this.transactionsService.save(task).then((newTask) => {
            this.items.unshift(newTask);
        })
        this.nameValue = "";
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}