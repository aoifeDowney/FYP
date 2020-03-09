import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";


import { User } from "../shared/user/user.model";
import { UserService } from "../shared/user/user.service";
import { TransactionsService } from "../shared/transactions/transactions.service";

import * as Kinvey from "kinvey-nativescript-sdk";

@Component({
    selector: "gr-HouseProfile",
    templateUrl: "./HouseProfile.component.html",
    styleUrls: ["./HouseProfile.component.css"]
})
export class HouseProfileComponent {

    user: User;
    users = [];
    activeUser = Kinvey.User.getActiveUser();
    userData = ​Kinvey.User.getActiveUser().data;

    constructor(private userService: UserService, private transactionsService: TransactionsService) {
        this.user = new User();
    }

    addHousehold() {
        var task = {
            userName: this.activeUser.username,
            houseName: this.userData["household"],
            user: true
        };

        this.transactionsService.save(task).then((newTask) => {
            this.users.unshift(newTask);
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}