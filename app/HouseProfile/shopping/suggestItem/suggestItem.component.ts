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
export class SuggestItemComponent implements OnInit {

    transactions = [];
    itemDetail = false;
    itemName: string;
    itemID: string;
    suggestedBy: string;
    boughtBy: string;
    toPay: string;
    toogleName = "No";
    toogled = false;
    itemPriceValue: number;
    itemDateValue = "";
    items = [];
    activeUser = Kinvey.User.getActiveUser();

    users = [];
    click = false;

    constructor(private transactionsService: TransactionsService, private router: Router) { }

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

    getItemDetails(name: string, id: string, create: string) {
        console.log("NAME" + id);
        console.log("Create" + create);
        //console.log("Sugg: " + show);
        this.itemName = name;
        this.itemID = id;
        //this.suggestedBy = suggestedBy;
        //this.boughtBy = boughtBy;
        this.itemDetail = true;

        if (create != this.activeUser._acl.creator && this.click == false) {
            var task = {
                name: this.itemName,
                date: this.itemDateValue,
                price: this.itemPriceValue,
                houseName: "Galway",
                boughtBy: this.boughtBy,
                toPay: this.activeUser.username,
                type: "House Shop",
                show: true,
                bought: false,
                complete: false
            };

            this.transactionsService.save(task).then((newTask) => {
                this.items.unshift(newTask);
            });
        }
        this.click = true;
        //this.users.push(this.activeUser.username);
    }

    onCheckedChange(args: EventData) {
        let sw = args.object as Switch;
        let isChecked = sw.checked;
        if (isChecked) {
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
        let i = 0;
            var task = {
                _id: this.itemID,
                name: this.itemName,
                date: this.itemDateValue,
                price: this.itemPriceValue,
                houseName: "Galway",
                boughtBy: this.activeUser.username,
                type: "House Shop",
                bought: true,
                complete: false
            };


            this.transactionsService.save(task).then((newTask) => {
                this.items.unshift(newTask);
            });

            this.itemDateValue = "";
            this.itemName = "";
            this.itemPriceValue = null;

            dialogs.alert({
                title: "Saved!",
                message: "The item has been updated and moved to the 'Items Bought' list",
                okButtonText: "Okay"
            }).then(() => {
                this.router.navigate(["/SuggestItem"])
            });
    }

    save() {
        var task = {
            _id: this.itemID,
            name: this.itemName,
            date: this.itemDateValue,
            price: this.itemPriceValue,
            houseName: "Galway",
            boughtBy: this.activeUser.username,
            // toPay: this.activeUser.username,
            type: "House Shop",
            bought: true,
            complete: false
        };

        this.transactionsService.save(task).then((newTask) => {
            this.items.unshift(newTask);
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