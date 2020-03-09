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
            if(this.transactions.length > 0) {
               this.sendAlert();
            }
        }, () => {
            console.log("Unable to retrive list of transactions");
        });
    }

    sendAlert(): boolean {
        //if(this.dueDate == true) {
            console.log("Due today!");
            return this.billDue = true;
       // }
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
            date: this.itemDate,
            price: this.price,
            boughtBy: this.activeUser.username,
            boughtDate: new Date(),
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