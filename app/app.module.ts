import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { Household } from "./HouseProfile/shared/household.module";

import { LoginComponent } from "./login/login.component";
import { IndividualProfileComponent } from "./IndividualProfile/IndividualProfile.component";
import { ProfileComponent } from "./IndividualProfile/Profile/profile.component";
import { EditProfileComponent } from "./IndividualProfile/EditProfile/editprofile.component";
import { ExpensesChartComponent } from "./shared/components/expenses-chart.component";
import { CalendarComponent } from "./IndividualProfile/Calendar/calendar.component";
import { HouseProfileComponent } from "./HouseProfile/HouseProfile.component";
import { RentComponent } from "./HouseProfile/rent/rent.component";
import { UtilityBillComponent } from "./HouseProfile/utilityBill/utilityBill.component";
import { ShoppingComponent } from "./HouseProfile/shopping/shopping.component";
import { AddBillComponent } from "./HouseProfile/utilityBill/addBill/addBill.component";
import { AddItemComponent } from "./HouseProfile/shopping/addItem/addItem.component";
import { SuggestItemComponent } from "./HouseProfile/shopping/suggestItem/suggestItem.component";
import { ListDetailComponent } from "./HouseProfile/shopping/listDetail/listDetail.component";
import { HouseLoginComponent } from "./HouseProfile/houseLogin/houseLogin.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    NativeScriptRouterModule,
    NativeScriptUIListViewModule,
    NativeScriptUISideDrawerModule,
    NativeScriptUIChartModule,
    NativeScriptUICalendarModule,
    AppRoutingModule
  ],
  providers: [
    Household
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    IndividualProfileComponent,
    ProfileComponent,
    EditProfileComponent,
    ExpensesChartComponent,
    CalendarComponent,
    HouseProfileComponent,
    RentComponent,
    UtilityBillComponent,
    ShoppingComponent,
    AddBillComponent,
    AddItemComponent,
    SuggestItemComponent,
    ListDetailComponent,
    HouseLoginComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }