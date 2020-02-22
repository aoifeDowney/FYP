import { Component, OnInit, EventEmitter, Output  } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Injectable } from '@angular/core';

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
export class ShoppingComponent {

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
    }

    getItemDetail(name: string, boughtBy: string, price: number): void {
        this.itemName = name;
        this.boughtBy = boughtBy;
        this.price = price;
        this.itemDetail = true;
        this.dividedPrice = this.price / this.houseMember;
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}