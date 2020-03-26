import { Component, OnInit, Input } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { DatePipe } from '@angular/common';
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as Kinvey from "kinvey-nativescript-sdk";

import { TransactionsService } from "../../../shared/transactions/transactions.service";

@Component({
    selector: "gr-detail",
    templateUrl: "./detail.component.html",
    styleUrls: ["./detail.component.css"],
    providers: [TransactionsService]
})
export class DetailComponent {

    now: Date = new Date();

    transactions = [];
    date = [];
    dueDate = false;
    billDue: boolean;
    activeUser = Kinvey.User.getActiveUser();
    userData = ​Kinvey.User.getActiveUser().data;
    itemName: string;
    boughtBy: string;
    dividedPrice: number;
    price: number;
    houseMember: number;
    houseMembers = [];
    itemDetail = false;
    users = [];
    names = [];
    name: string;
    itemID: string;
    suggestedBy: string;
    itemDate = "";
    items = [];
    itemDateValue = "";

    constructor(private transactionsService: TransactionsService, private datePipe: DatePipe) {}

    ngOnInit(): void {
        this.transactionsService.getAllUtilityBills().subscribe((data) => {
            this.transactions = data;
        }, () => {
            console.log("Unable to retrive list of transactions");
        });

        this.transactionsService.getUtilityBillDue().subscribe((data) => {
            this.date = data;
            if(this.date.length > 0) {
               this.sendAlert();
            }
        }, () => {
            console.log("Unable to retrive list of transactions");
        });

        this.transactionsService.getHouseMembers().subscribe((data) => {
            this.users.push(data);
               this.houseMember = this.users[0].length + 1;
        }, () => {
            console.log("Unable to retrive list of transactions");
        });
    }

    sendAlert(): boolean {
            console.log("Due today!");
            return this.billDue = true;
    }

    alert() {
        dialogs.alert({
            title: "Bill Due Today",
            message: "A bill is due today! Please pay the bill which is due.",
            okButtonText: "Okay"
        });
    }

    getItemDetail(name: string, id: string, boughtBy: string, price: number, date: string): void {
        this.itemName = name;
        this.itemID = id;
        this.boughtBy = boughtBy;
        this.price = price;
        this.itemDate = date;
        this.dividedPrice = this.price / this.houseMember;
        this.itemDetail = true;
    }

    makePayment() {
        var task = {
            _id: this.itemID,
            name: this.itemName,
            date: new Date(),
            price: this.price / this.houseMember,
            boughtBy: this.activeUser.username,
            type: "Utility Bill",
            houseName: this.userData["household"],
            bought: true,
            complete: true
        };

        this.transactionsService.save(task).then((newTask) => {
            this.items.unshift(newTask);
        });
        dialogs.alert({
            title: "Payment Successful!",
            message: "This bill has been paid for",
            okButtonText: "Okay"
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}