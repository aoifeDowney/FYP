import { Component, OnInit, Input } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { EventData } from "tns-core-modules/data/observable";
import { Switch } from "tns-core-modules/ui/switch";
import * as dialogs from "tns-core-modules/ui/dialogs";

import { TransactionsService } from "../../../../shared/transactions/transactions.service";

@Component({
    selector: "itemDetail",
    templateUrl: "./itemDetail.component.html",
    styleUrls: ["./itemDetail.component.css"],
    providers: [TransactionsService]
})
export class ItemDetailComponent {

    toogleName = "No";
    toogled = false;
    itemPriceValue: number;
    itemDateValue = "";
    items = [];

    constructor(private transactionsService: TransactionsService) {}


    onCheckedChange(args: EventData) {
        let sw = args.object as Switch;
        let isChecked = sw.checked; 
        if(isChecked) {
            this.toogleName = "Yes";
            this.toogled = true;
        }
        else {
            this.toogleName = "No";
            this.toogled = false;
        }
    }

    //NOTE: have to put in all the variables - no update=>keep same value
    saveItem() {
        var task = {
            _id: '5e3ed61ea82a79001660d25d', //do this by getting the name of the item
            name: "Milk",
            date: this.itemDateValue,
            price: this.itemPriceValue,
            boughtBy: "Aoife",
            type: "House Shop",
            bought: true,
            complete: false
        };

        this.transactionsService.save(task).then((newTask) => {
            this.items.unshift(newTask);
        })
        this.itemDateValue = "";

        dialogs.alert({
            title: "Saved!",
            message: "The item has been updated and moved to the 'Items Bought' list",
            okButtonText: "Okay"
        });

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}