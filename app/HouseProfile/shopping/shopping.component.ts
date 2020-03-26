import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Injectable } from '@angular/core';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { TransactionsService } from "../../shared/transactions/transactions.service";
import * as Kinvey from "kinvey-nativescript-sdk";
import { openUrl } from 'tns-core-modules/utils/utils';
import { alert } from 'tns-core-modules/ui/dialogs';
import InAppBrowser from 'nativescript-inappbrowser';
import { android } from "tns-core-modules/application";
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

    private _url: string;

    get url(): string {
        return this._url;
      }


    constructor(private transactionsService: TransactionsService, private household: Household) {
        this._url = 'https://www.paypal.com/ie/webapps/mpp/send-money-online';
    }

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
               this.houseMember = this.users[0].length + 1;
        }, () => {
            alert({
                title: "Transactions",
                message: "An error occurred retrieving your data"
            });
        });
    }

    sleep (timeout) {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }


      openLink = async () => {
          console.log("inside method");
        try {
            console.log("inside try");
          const { url } = this;
          if (await InAppBrowser.isAvailable()) {
            console.log("inside if");
            const result = await InAppBrowser.open(url, {
              // iOS Properties
              dismissButtonStyle: 'done',
              preferredBarTintColor: '#8f91de',
              preferredControlTintColor: 'white',
              readerMode: false,
              animated: true,
              modalPresentationStyle: 'fullScreen',
              modalTransitionStyle: 'partialCurl',
              modalEnabled: true,
              enableBarCollapsing: false,
              // Android Properties
              showTitle: true,
              toolbarColor: '#8f91de',
              secondaryToolbarColor: 'black',
              enableUrlBarHiding: true,
              enableDefaultShare: true,
              forceCloseOnRedirection: true,
              // Specify full animation resource identifier(package:anim/name)
              // or only resource name(in case of animation bundled with app).
              animations: {
                startEnter: 'slide_in_right',
                startExit: 'slide_out_left',
                endEnter: 'slide_in_left',
                endExit: 'slide_out_right'
              },
              headers: {
                'my-custom-header': 'my custom header value'
              }
            });
            await this.sleep(800);
          }
          else {
            openUrl(url);
          }
        }
        catch (error) {
          alert({
            title: 'Error',
            message: error.message,
            okButtonText: 'Ok'
          });
        }
        this.makePayment();
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
            price: this.price / this.houseMember,
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