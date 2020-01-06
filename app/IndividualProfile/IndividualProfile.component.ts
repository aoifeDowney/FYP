import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";


@Component({
    selector: "gr-IndividualProfile",
    templateUrl: "./IndividualProfile.component.html",
    styleUrls: ["./IndividualProfile.component.css"]
})
export class IndividualProfileComponent {
   
    constructor(private router: Router) { }
    
    
    move() {
        alert("Move!!!");
        this.router.navigate(["/individualHome"]);
    }
}
