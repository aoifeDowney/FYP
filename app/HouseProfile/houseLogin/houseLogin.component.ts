import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import { Injectable } from '@angular/core';

import { Household } from "../shared/household.module";
import { User } from "../../shared/user/user.model";
import { UserService } from "../../shared/user/user.service";

@Component({
    selector: "gr-houseLogin",
    styleUrls: ["./houseLogin.component.css"],
    templateUrl: "./houseLogin.component.html",
    providers: [Household, UserService]
})

@Injectable()
export class HouseLoginComponent implements OnInit {

    user: User;

    isLoggingIn = true;
    houseName: string;
    house: Household;

    constructor(private router: Router, private page: Page, private household: Household, private userService: UserService) {  
        this.user = new User();     
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }

    submit(): void {
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.getHousehold();
        }
    }

    login(): void {
        if(this.houseName = "Galway") {
            this.router.navigate(["/HouseProfile"]);
            this.household.setName(this.houseName);
            console.log("Login: " + this.household.getName());
        }
    }

    getHousehold() {
        this.userService.addHousehold(this.user)
        .then(
            () => this.router.navigate(["/IndividualProfile"]),
            (exception) => {
                if (exception.error && exception.error.description) {
                    alert(exception.error.description);
                } else {
                    alert(exception)
                }
            }
        );
    }

    signUp(): void {
        
    }

    toggleDisplay(): void {
        this.isLoggingIn = !this.isLoggingIn;
    }
}
