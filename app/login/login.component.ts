import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import * as dialogs from "tns-core-modules/ui/dialogs";


import { User } from "../shared/user/user.model";
import { UserService } from "../shared/user/user.service";
import { UtilityService } from "../shared/user/utilityService";

@Component({
    selector: "gr-login",
    styleUrls: ["./login.component.css"],
    templateUrl: "./login.component.html", 
    providers: [UserService, UtilityService]
})
export class LoginComponent implements OnInit {
    user: User;
    isLoggingIn = true;
    emailError = false;
    usernameError = false;
    passError = false;
    householdError = false
    errorMessage = "";
    usernameMessage = "";
    passMessage = "";
    householdMessage = "";

    constructor(private router: Router, private userService: UserService, private page: Page, private utilityService: UtilityService) {
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
        if(this.hasEmailErrors() || this.hasUsernameErrors() || this.hasPasswordErrors() || this.hasHouseholdErrors()) {
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
                    if (exception) {
                        dialogs.alert({
                            title: "Error",
                            message: "This email/username is already taken. Please try again using a different email/username",
                            okButtonText: "Okay"
                        });
                    }
                }
            );
    }

    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    hasEmailErrors() {
    const isValidEmail = this.user.hasEmail() && this.utilityService.isValidEmail(this.user.email);
    if(isValidEmail) {
        this.emailError = false;
        this.errorMessage = "";
        }  
        else if(this.user.email == null) {
            this.emailError = true;
            this.errorMessage = "Email cannot be blank";
        }
         else {
            this.emailError = true;
            this.errorMessage = "Invalid Email";
        } 
        return this.emailError; 
    }

    hasUsernameErrors() {
        if(this.user.username == null) {
            this.usernameError = true;
            this.usernameMessage = "Username field cannot be blank";
        } 
        else {
            this.usernameError = false;
            this.usernameMessage = "";
        }
        return this.usernameError;        
    }

    hasPasswordErrors() {
        if(this.user.password == null) {
            this.passError = true;
            this.passMessage = "Password field cannot be blank";
        } 
        else {
            this.passError = false;
            this.passMessage = "";
        }
        return this.passError;        
    }

    hasHouseholdErrors() {
        if(this.user.household == null) {
            this.householdError = true;
            this.householdMessage = "Houshold field cannot be blank";
        } 
        else {
            this.householdError = false;
            this.householdMessage = "";
        }
        return this.householdError;        
    }
}
