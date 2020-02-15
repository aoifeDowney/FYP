import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Router } from "@angular/router";
import { EventData } from "tns-core-modules/data/observable";
import { Switch } from "tns-core-modules/ui/switch";
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as Kinvey from "kinvey-nativescript-sdk";

import { TransactionsService } from "../../../shared/transactions/transactions.service";

@Component({
    selector: "gr-suggestItem",
    templateUrl: "./suggestItem.component.html",
    styleUrls: ["./suggestItem.component.css"],
    providers: [TransactionsService]
})
export class SuggestItemComponent {

    transactions = [];
    itemDetail = false;
    itemName: string;
    itemID: string;
    suggestedBy: string;
    toogleName = "No";
    toogled = false;
    itemPriceValue: number;
    itemDateValue = "";
    items = [];
    activeUser = Kinvey.User.getActiveUser();

    constructor(private transactionsService: TransactionsService, private router: Router) {}

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

    getItemDetails(name: string, id: string, suggestedBy: string) {
        this.itemName = name;
        this.itemID = id;
        this.suggestedBy = suggestedBy;
        this.itemDetail = true;
    }

    onCheckedChange(args: EventData) {
        let sw = args.object as Switch;
        let isChecked = sw.checked; 
        if(isChecked) {
            this.toogleName = "Yes";
            this.toogled = true;
        }
        else {
            this.toogleName = "No";
            this.toogled = false;
        }
    }

    //NOTE: have to put in all the variables - no update=>keep same value
    saveItem() {
        var task = {
            _id: this.itemID,
            name: this.itemName,
            date: this.itemDateValue,
            price: this.itemPriceValue,
            boughtBy: this.activeUser.username,
            type: "House Shop",
            bought: true,
            complete: false
        };

        this.transactionsService.save(task).then((newTask) => {
            this.items.unshift(newTask);
        })
        this.itemDateValue = "";

        dialogs.alert({
            title: "Saved!",
            message: "The item has been updated and moved to the 'Items Bought' list",
            okButtonText: "Okay"
        }).then(() => {
            this.router.navigate(["/SuggestItem"])
        });
    }

    back() {
        this.itemDetail = false;
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}