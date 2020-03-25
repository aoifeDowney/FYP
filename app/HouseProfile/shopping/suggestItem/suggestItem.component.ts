import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Router } from "@angular/router";
import { EventData } from "tns-core-modules/data/observable";
import { Switch } from "tns-core-modules/ui/switch";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { DatePipe } from '@angular/common';
import * as Kinvey from "kinvey-nativescript-sdk";

import { TransactionsService } from "../../../shared/transactions/transactions.service";

@Component({
    selector: "gr-suggestItem",
    templateUrl: "./suggestItem.component.html",
    styleUrls: ["./suggestItem.component.css"],
    providers: [TransactionsService]
})
export class SuggestItemComponent implements OnInit {

    now: Date = new Date();
    minDate: Date = new Date(this.now.getFullYear(), this.now.getMonth(), 1);
    maxDate: Date = new Date();

    transactions = [];
    itemDetail = false;
    itemName: string;
    itemID: string;
    toogleName = "No";
    toogled = false;
    suggestedBy: string;
    itemPriceValue: number;
    itemDateValue = "";
    items = [];
    activeUser = Kinvey.User.getActiveUser();
    userData = ​Kinvey.User.getActiveUser().data;

    member: number;
    users = [];
    name = [];
    names: string;

    constructor(private transactionsService: TransactionsService, private router: Router, private datePipe: DatePipe) {}

    ngOnInit(): void {
        this.transactionsService.getSuggestedItem().subscribe((data) => {
            this.transactions = data;
        }, () => {
            alert({
                title: "Transactions",
                message: "An error occurred retrieving your data"
            });
        });

        this.transactionsService.getHouseMembers().subscribe((data) => {
            this.users.push(data);
            let number = this.users[0].length;
            for(let i = 0; i < number; i++) {
                this.member  = this.users[0].length + 1;
                if(this.name.includes(this.users[0][i]["userName"])){
                    return;
                } else {
                    this.name.push(this.users[0][i]["userName"]);
                }

            }
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
        if (isChecked) {
            this.toogleName = "Yes";
            this.toogled = true;
        }
        else {
            this.toogleName = "No";
            this.toogled = false;
        }
    }

    saveItem() {
        for (let i = 0; i < this.name.length; i++) {
            var task = {
                name: this.itemName,
                date: this.itemDateValue,
                price: this.itemPriceValue,
                houseName: this.userData["household"],
                toPay: this.name[i],
                type: "House Shop",
                bought: true,
                complete: false
            };

            this.transactionsService.save(task).then((newTask) => {
                this.items.unshift(newTask);
            });
        }

        this.boughtByCurrentUser();

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

    boughtByCurrentUser() {
        var task = {
            _id: this.itemID,
            name: this.itemName,
            date: this.itemDateValue,
            price: this.itemPriceValue / this.member,
            houseName: this.userData["household"],
            boughtBy: this.activeUser.username,
            type: "House Shop",
            bought: true,
            complete: true
        };

        this.transactionsService.save(task).then((newTask) => {
            this.items.unshift(newTask);
        });
    }

    onDateChanged(args) {
        this.itemDateValue = this.datePipe.transform(args.value,"yyyy-MM-dd");
    }

    back() {
        this.itemDetail = false;
        this.toogleName = "No";
        this.toogled = false;
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}