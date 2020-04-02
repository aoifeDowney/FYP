import { Component, OnInit, ViewChild } from "@angular/core";
import * as app from "application";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { Router } from "@angular/router";
import { UserService } from "../app/shared/user/user.service";
import { TransactionsService } from "../app/shared/transactions/transactions.service";

@Component({
  selector: "gr-app",
  templateUrl: "app.component.html",
  providers: [UserService, TransactionsService],
})
export class AppComponent implements OnInit {
  private _sideDrawerTransition: DrawerTransitionBase;

  loggedIn = true;

  icons = [];
  icon: string;

  constructor(private routerExtensions: RouterExtensions, private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this._sideDrawerTransition = new SlideInOnTopTransition();
  }

  logout() {
    this.closeSideDrawer();
    this.loggedIn = false;
    this.userService.logout()
      .then(
        () => this.router.navigate(["/login"]),
        (exception) => {
          if (exception.error && exception.error.description) {
            alert(exception.error.description);
          } else {
            alert(exception)
          }
        }
      );
  }

  get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTransition;
  }

  closeSideDrawer(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.closeDrawer();
  }
}