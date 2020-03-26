import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { DatePipe } from '@angular/common';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { openUrl } from 'tns-core-modules/utils/utils';
import { alert } from 'tns-core-modules/ui/dialogs';
import InAppBrowser from 'nativescript-inappbrowser';
import { android } from "tns-core-modules/application";
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

    private _url: string;

    get url(): string {
        return this._url;
      }

    constructor(private transactionsService: TransactionsService, private datePipe: DatePipe) {
        this._url = 'https://www.paypal.com/ie/webapps/mpp/send-money-online';
    }

    ngOnInit(): void {}

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