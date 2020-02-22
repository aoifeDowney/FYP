import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import { TransactionsService } from "../shared/transactions/transactions.service";

import { User } from "../shared/user/user.model";
import * as Kinvey from "kinvey-nativescript-sdk";

@Component({
    selector: "gr-IndividualProfile",
    templateUrl: "./IndividualProfile.component.html",
    styleUrls: ["./IndividualProfile.component.css"],
    providers: [TransactionsService]
})
export class IndividualProfileComponent implements OnInit {
    user: User;
    activeUser = Kinvey.User.getActiveUser();

    expensesChartData = [];
    transactions = [];
    textFieldValue = "";
    rentTotal: number;
    rentPercentage: number;
    utilityBillsTotal: number;
    utilityBillsPercentage: number;
    houseShopTotal: number;
    houseShopPercentage: number;
    totalTransactions: number;
    house: number[] = [];

    constructor(private transactionsService: TransactionsService) {
        this.expensesChartData = [
            { name: "Rent", ammount: 69.5 },
            { name: "Utility Bills", ammount: 19.60 },
            { name: "House Shop", ammount: 10.80 }
        ]
        //console.log("YES!!!" + this.activeUser._acl.creator);
    }

    ngOnInit(): void {
        this.transactionsService.get().subscribe((data) => {
            this.transactions = data;
        }, () => {
            alert({
                title: "Transactions",
                message: "An error occurred retrieving your data"
            });
        });        
    }

    /*save() {
        var transaction = {
          name: this.textFieldValue
        };
    
        this.transactionsService.save(transaction).then((newTransaction) => {
          this.transactions.unshift(newTransaction);
        })
        this.textFieldValue = "";
      }*/

      calculatePrice(type: string, price: number) {

        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        if(type == "House Shop") {
            this.house.push(price);
            this.houseShopTotal = this.house.reduce(reducer);
            this.houseShopTotal = this.houseShopTotal / 11;
        }
        else if(type == "Rent") {
            this.house.push(price);
            this.rentTotal = this.house.reduce(reducer);
            this.rentTotal = this.rentTotal / 11;
        }
        else if(type == "Utility Bill") {
            this.house.push(price);
            this.utilityBillsTotal = this.house.reduce(reducer);
            this.utilityBillsTotal = this.utilityBillsTotal / 11;
        }
        
        this.totalTransactions = this.houseShopTotal;
        this.totalTransactions = this.rentTotal
        this.totalTransactions = this.utilityBillsTotal;

        return this.totalTransactions;
    }

      getIcon(type: string) {
          if(type == "House Shop") {
              return "~/images/houseShop.png";
          }
          else if(type == "Rent") {
              return "~/images/rent.png";
          }
          else if(type == "Utility Bill") {
              return "~/images/utilityBill.png"
          }
      }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
