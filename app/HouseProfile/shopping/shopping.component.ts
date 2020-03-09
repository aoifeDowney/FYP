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
    userData = ​Kinvey.User.getActiveUser().data;
    itemName: string;
    boughtBy: string;
    dividedPrice: number;
    price: number;
    houseMember: number;
    transactions = [];
    houseMembers = [];
    itemDetail = false;
    users = [];
    names = [];
    name: string;
    itemID: string;
    suggestedBy: string;
    itemDate = "";
    items = [];

    icons = [];
    icon: string;
    icon1 = "~/images/avatars/avatars/png/001-girl.png";
    icon2 = "~/images/avatars/avatars/png/015-girl-14.png";
    icon3 = "~/images/avatars/avatars/png/003-girl-2.png";
    icon4 = "~/images/avatars/avatars/png/004-girl-3.png";
    icon5 = "~/images/avatars/avatars/png/005-girl-4.png";
    icon6 = "~/images/avatars/avatars/png/034-girl-21.png";
    icon7 = "~/images/avatars/avatars/png/007-girl-6.png"
    icon8 = "~/images/avatars/avatars/png/008-girl-7.png";
    icon9 = "~/images/avatars/avatars/png/043-man-10.png";
    icon10 = "~/images/avatars/avatars/png/022-man-1.png";
    icon11 = "~/images/avatars/avatars/png/035-boy-5.png";
    icon12 = "~/images/avatars/avatars/png/024-boy-1.png";
    icon13 = "~/images/avatars/avatars/png/044-boy-8.png";
    icon14 = "~/images/avatars/avatars/png/039-man-7.png";
    icon15 = "~/images/avatars/avatars/png/041-man-8.png";


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

        this.transactionsService.getHouseShopPaid().subscribe((data) => {
            this.items = data;
        }, () => {
            alert({
                title: "Transactions",
                message: "An error occurred retrieving your data"
            });
        });

        this.transactionsService.getUsersIcon().subscribe((data) => {
            this.icons = data;
            
        }, () => {
            console.log("Unable to retrive list of transactions");
        });

        this.transactionsService.getHouseMembers().subscribe((data) => {
            this.users.push(data);
            for(let i = 0; i < this.users.length; i++) {
               this.houseMember = this.users.length + 1;
            }
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
        var task = {
            _id: this.itemID,
            name: this.itemName,
            date: this.itemDate,
            price: this.price,
            boughtBy: this.activeUser.username,
            boughtDate: new Date(),
            type: "House Shop",
            houseName: this.userData["household"],
            bought: true,
            complete: true
        };

        this.transactionsService.save(task).then((newTask) => {
            this.items.unshift(newTask);
        });
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