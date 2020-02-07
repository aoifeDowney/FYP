import { Component, OnInit, Input } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

//import { TransactionsService } from "../../shared/transactions/transactions.service";

@Component({
    selector: "listDetail",
    templateUrl: "./listDetail.component.html",
    styleUrls: ["./listDetail.component.css"]
   // providers: [TransactionsService]
})
export class ListDetailComponent {

    @Input() itemName: string;

    transactions = [];
    transactionsNotPaid = [];
    paid = false;
    notPaid = false;

    //constructor(private transactionsService: TransactionsService) {}

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}