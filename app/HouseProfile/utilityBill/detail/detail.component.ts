import { Component, OnInit, Input } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { DatePipe } from '@angular/common';
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as Kinvey from "kinvey-nativescript-sdk";
import { openUrl } from 'tns-core-modules/utils/utils';
import { alert } from 'tns-core-modules/ui/dialogs';
import InAppBrowser from 'nativescript-inappbrowser';
import { android } from "tns-core-modules/application";

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
    paymentMade = false;

    private _url: string;

    get url(): string {
        return this._url;
      }

    constructor(private transactionsService: TransactionsService, private datePipe: DatePipe) {
        this._url = 'https://www.paypal.com/ie/webapps/mpp/send-money-online';
    }

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
        this.paymentMade = true;
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

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}