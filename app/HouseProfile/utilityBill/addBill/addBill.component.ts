import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { DatePicker } from "tns-core-modules/ui/date-picker";
import { DatePipe } from '@angular/common';
import * as Kinvey from "kinvey-nativescript-sdk";

import { TransactionsService } from "../../../shared/transactions/transactions.service";

@Component({
    selector: "gr-addBill",
    templateUrl: "./addBill.component.html",
    styleUrls: ["./addBill.component.css"],
    providers: [TransactionsService]
})
export class AddBillComponent {
    
    activeUser = Kinvey.User.getActiveUser();
    userData = ​Kinvey.User.getActiveUser().data;

    now: Date = new Date();
    minDate: Date = new Date();
    maxDate: Date = new Date(2045, 4, 12);

    nameValue = "";
    priceValue: number;
    dateValue = "";
    items = [];
    name = [];
    users = [];

    constructor(private transactionsService: TransactionsService, private datePipe: DatePipe) {}

    ngOnInit(): void {
        this.transactionsService.getHouseMembersBill().subscribe((data) => {
            this.users.push(data);
            let number = this.users[0].length;
            for(let i = 0; i < number; i++) {
                if(this.name.includes(this.users[0][i]["userName"])){
                    return;
                } else {
                    this.name.push(this.users[0][i]["userName"]);
                }

            }
        }, () => {
            console.log("Unable to retrive list of transactions");
        });
    }

    onDateChanged(args) {
        console.log("Date New value: " + args.value);
        this.dateValue = this.datePipe.transform(args.value,"yyyy-MM-dd");
    }


    saveBill() {
        for (let i = 0; i < this.name.length; i++) {
        var task = {
            name: this.nameValue,
            price: this.priceValue,
            date: this.dateValue,
            type: "Utility Bill",
            toPay: this.name[i],
            houseName: this.userData["household"],
            bought: true,
            complete: false
        };

        this.transactionsService.save(task).then((newTask) => {
            this.items.unshift(newTask);
        })
    }

        this.nameValue = "";
        this.priceValue = null;
        this.dateValue = "";

        dialogs.alert({
            title: "Saved!",
            message: "The new bill as been added",
            okButtonText: "Okay"
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}