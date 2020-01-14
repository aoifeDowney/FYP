import { Component, OnInit, ViewChild } from "@angular/core";
import * as app from "application";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { Router } from "@angular/router";

@Component({
  selector: "gr-app",
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
  private _sideDrawerTransition: DrawerTransitionBase;

  constructor(private routerExtensions: RouterExtensions, private router: Router) {
      // Use the component constructor to inject services.
  }

  ngOnInit(): void {
      this._sideDrawerTransition = new SlideInOnTopTransition();
  }

  get sideDrawerTransition(): DrawerTransitionBase {
      return this._sideDrawerTransition;
  }

  closeSideDrawer(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.closeDrawer();
  }
}