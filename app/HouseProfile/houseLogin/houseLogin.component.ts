import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import { Injectable } from '@angular/core';

import { Household } from "../shared/household.module";

@Component({
    selector: "gr-houseLogin",
    styleUrls: ["./houseLogin.component.css"],
    templateUrl: "./houseLogin.component.html",
    providers: [Household]
})

@Injectable()
export class HouseLoginComponent implements OnInit {

    isLoggingIn = true;
    houseName: string;
    house: Household;

    constructor(private router: Router, private page: Page, private household: Household) {       
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }

    submit(): void {
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }

    login(): void {
        if(this.houseName = "Galway") {
            this.router.navigate(["/HouseProfile"]);
            this.household.setName(this.houseName);
            console.log("Login: " + this.household.getName());
        }
    }

    signUp(): void {
        
    }

    toggleDisplay(): void {
        this.isLoggingIn = !this.isLoggingIn;
    }
}
