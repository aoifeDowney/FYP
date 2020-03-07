import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import * as dialogs from "tns-core-modules/ui/dialogs";


import { User } from "../shared/user/user.model";
import { UserService } from "../shared/user/user.service";

import * as Kinvey from "kinvey-nativescript-sdk";

@Component({
    selector: "gr-login",
    providers: [UserService],
    styleUrls: ["./login.component.css"],
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
    user: User;
    isLoggingIn = true;

    constructor(private router: Router, private userService: UserService, private page: Page) {
        this.user = new User();
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }

    submit() {
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }

    login() {
        this.userService.login(this.user)
            .then(
                () => this.router.navigate(["/IndividualProfile"]),
                (exception) => {
                    if (exception) {
                        dialogs.alert({
                            title: "Error",
                            message: "Please check your login details",
                            okButtonText: "Okay"
                        });
                    } 
                }
            );
    }

    signUp() {
        this.userService.register(this.user)
            .then(
                () => {
                    this.userService.addHousehold(this.user);
                }
            )
            .then(
                () => {
                    this.router.navigate(["/IndividualProfile"]);
                },
                (exception) => {
                    if (exception.error && exception.error.description) {
                        alert(exception.error.description);
                    } else {
                        alert(exception)
                    }
                }
            );
    }

    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }
}
