import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Injectable } from '@angular/core';
import * as dialogs from "tns-core-modules/ui/dialogs";

import { TransactionsService } from "../../shared/transactions/transactions.service";
import * as Kinvey from "kinvey-nativescript-sdk";

import { Household } from "../shared/household.module";

@Component({
    selector: "gr-shopping",
    templateUrl: "./shopping.component.html",
    styleUrls: ["./shopping.component.css"],
    providers: [TransactionsService, Household]
})

@Injectable()
export class ShoppingComponent implements OnInit{

    activeUser = Kinvey.User.getActiveUser();
    itemName: string;
    boughtBy: string;
    dividedPrice: number;
    price: number;
    houseMember = 4;
    transactions = [];
    houseMembers = [];
    itemDetail = false;
    name: string;

    itemID: string;
    suggestedBy: string;
    itemDate = "";
    items = [];


    constructor(private transactionsService: TransactionsService, private household: Household) {}

    ngOnInit(): void {
        this.transactionsService.getHouseShop().subscribe((data) => {
            this.transactions = data;
        }, () => {
            alert({
                title: "Transactions",
                message: "An error occurred retrieving your data"
            });
        });

        console.log("NAME" + this.itemName);

        //INSEAD OF PAID LIST THOESE WHO HAVE YET TO PAY
        this.transactionsService.getHouseShopPaid().subscribe((data) => {
            this.items = data;
        }, () => {
            alert({
                title: "Transactions",
                message: "An error occurred retrieving your data"
            });
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

        this.transactionsService.getHouseShopPaidName(this.itemName).subscribe((data) => {
            this.items = data;
        }, () => {
            alert({
                title: "Transactions",
                message: "An error occurred retrieving your data"
            });
        });
    }

    makePayment() {
        /*var task = {
            _id: this.itemID,
            name: this.itemName,
            date: this.itemDate,
            price: this.price,
            boughtBy: this.activeUser.username,
            boughtDate: new Date(),
            type: "House Shop",
            houseName: 'Galway',
            bought: true,
            complete: true
        };

        this.transactionsService.save(task).then((newTask) => {
            this.items.unshift(newTask);
        });*/
        dialogs.alert({
            title: "Payment Successful!",
            message: "This item has been paid for",
            okButtonText: "Okay"
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