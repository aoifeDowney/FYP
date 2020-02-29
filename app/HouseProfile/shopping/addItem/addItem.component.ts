import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as Kinvey from "kinvey-nativescript-sdk";

import { TransactionsService } from "../../../shared/transactions/transactions.service";

@Component({
    selector: "gr-addItem",
    templateUrl: "./addItem.component.html",
    styleUrls: ["./addItem.component.css"],
    providers: [TransactionsService]
})
export class AddItemComponent {

    nameValue = "";
    items = [];
    activeUser = Kinvey.User.getActiveUser();
    userData = ​Kinvey.User.getActiveUser().data;    

    constructor(private transactionsService: TransactionsService) { }

    ngOnInit(): void {
    }

    suggestItem() {
        var task = {
            name: this.nameValue,
            type: "House Shop",
            suggestedBy: this.activeUser.username,
            houseName: this.userData["household"],
            show: true,
            bought: false,
            complete: false
        };

        this.transactionsService.save(task).then((newTask) => {
            this.items.unshift(newTask);
        })
        this.nameValue = "";

        dialogs.alert({
            title: "Saved!",
            message: "Your suggestion has been added to the list",
            okButtonText: "Okay"
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}