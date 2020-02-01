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

import { LoginComponent } from "./login/login.component";
import { IndividualProfileComponent } from "./IndividualProfile/IndividualProfile.component";
import { ProfileComponent } from "./IndividualProfile/Profile/profile.component";
import { EditProfileComponent } from "./IndividualProfile/EditProfile/editprofile.component";
import { ExpensesChartComponent } from "./shared/components/expenses-chart.component";
import { CalendarComponent } from "./IndividualProfile/Calendar/calendar.component";
import { HouseProfileComponent } from "./HouseProfile/HouseProfile.component";

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
  declarations: [
    AppComponent,
    LoginComponent,
    IndividualProfileComponent,
    ProfileComponent,
    EditProfileComponent,
    ExpensesChartComponent,
    CalendarComponent,
    HouseProfileComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }