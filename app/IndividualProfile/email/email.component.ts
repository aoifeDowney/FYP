import { Component, OnInit } from "@angular/core";
import * as email from "nativescript-email";

@Component({
    selector: "email",
    moduleId: module.id,
    templateUrl: "./email.component.html",
    styleUrls: ["./email.component.css"]
})
export class EmailComponent implements OnInit {

    toEmail;
    ccEmail;
    bccEmail;
    subject = "HouseShare app invitation"
    message;

    constructor() { }

    ngOnInit(): void { }

    onEmailSend(): void {
        // basic validation
        if (!this.toEmail) {
            alert("Please enter all required fields!");
            return;
        }

        email.compose({
            subject: this.subject,
            body: this.message,
            to: [this.toEmail],
            cc: [this.ccEmail ? this.ccEmail : ' '],
            bcc: [this.bccEmail ? this.bccEmail : ' ']
        }).then(() => {
            setTimeout(() => {
                this.clearFields();
            }, 5000);
        }, err => {
            this.clearFields();
            alert("Error: " + err);
        });
    }

    clearFields(): void {
        this.toEmail = '';
        this.ccEmail = '';
        this.bccEmail = '';
        this.subject = '';
        this.message = '';
    }
}
