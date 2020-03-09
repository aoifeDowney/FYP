import { Component, OnInit, Input } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { DatePipe } from '@angular/common';

import { TransactionsService } from "../../../shared/transactions/transactions.service";

@Component({
    selector: "gr-detail",
    templateUrl: "./detail.component.html",
    styleUrls: ["./detail.component.css"],
    providers: [TransactionsService]
})
export class DetailComponent {

    @Input()
    dates: string[];

    transactions = [];
    dueDate = false;
    billDue: boolean;
    now: Date = new Date();
    varr= new Array();
        //arr= this.now.split(" ");

    constructor(private transactionsService: TransactionsService, private datePipe: DatePipe) {}

    ngOnInit(): void {
        this.transactionsService.getAllUtilityBills().subscribe((data) => {
            this.transactions = data;
            if(this.transactions.length > 0) {
                //this.dueDate = true;
               this.sendAlert();
            }
        }, () => {
            alert({
                title: "Transactions",
                message: "An error occurred retrieving your data"
            });
        });

        console.log(this.datePipe.transform(this.now,"yyyy-MM-dd"));
        /*for(let i = 0; i < this.dates.length; i++) {
        console.log(this.dates[i]);
        }
        if(this.transactions.includes(this.now)) {
            console.log("Due today!");
        }*/
    }

    sendAlert(): boolean {
        //if(this.dueDate == true) {
            console.log("Due today!");
            return this.billDue = true;
       // }
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}