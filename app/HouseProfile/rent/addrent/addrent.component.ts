import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { DatePipe } from '@angular/common';
import * as dialogs from "tns-core-modules/ui/dialogs";

import { TransactionsService } from "../../../shared/transactions/transactions.service";
import * as Kinvey from "kinvey-nativescript-sdk";

@Component({
    selector: "gr-addrent",
    templateUrl: "./addrent.component.html",
    styleUrls: ["./addrent.component.css"],
    providers: [TransactionsService]
})
export class AddRentComponent {

    now: Date = new Date();

    items = [];
    itemPriceValue: number;
    activeUser = Kinvey.User.getActiveUser();
    userData = ​Kinvey.User.getActiveUser().data;

    constructor(private transactionsService: TransactionsService, private datePipe: DatePipe) {}

    ngOnInit(): void {}

    makePayment() {
        var task = {
            name: "Rent",
            price: this.itemPriceValue,
            date: this.datePipe.transform(this.now,"yyyy-MM-dd"),
            houseName: this.userData["household"],
            type: "Rent",
            boughtBy: this.activeUser.username,
            bought: true,
            complete: true
        };

        this.transactionsService.save(task).then((newTask) => {
            this.items.unshift(newTask);
        });

        this.itemPriceValue = null;

        dialogs.alert({
            title: "Payment Successful!",
            message: "Your rent has been paid for",
            okButtonText: "Okay"
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}