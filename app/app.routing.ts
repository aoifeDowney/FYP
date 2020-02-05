import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoginComponent } from "./login/login.component";
import { IndividualProfileComponent } from "./IndividualProfile/IndividualProfile.component";
import { ProfileComponent } from "./IndividualProfile/Profile/profile.component";
import { EditProfileComponent } from "./IndividualProfile/EditProfile/editprofile.component";
import { CalendarComponent } from "./IndividualProfile/Calendar/calendar.component";
import { HouseProfileComponent } from "./HouseProfile/HouseProfile.component";
import { RentComponent } from "./HouseProfile/rent/rent.component";
import { UtilityBillComponent } from "./HouseProfile/utilityBill/utilityBill.component";
import { ShoppingComponent } from "./HouseProfile/shopping/shopping.component";
import { AddItemComponent } from "./HouseProfile/shopping/addItem/addItem.component";
import { AddBillComponent } from "./HouseProfile/utilityBill/addBill/addBill.component";


const routes: Routes = [
    //{ path: "", redirectTo: BackendService.isUserLoggedIn() ? "/Shopping" : "/login", pathMatch: "full" },
    { path: "", component: IndividualProfileComponent },
    { path: "IndividualProfile", component: IndividualProfileComponent },
    { path: "Profile", component: ProfileComponent },
    { path: "EditProfile", component: EditProfileComponent },
    { path: "Calendar", component: CalendarComponent },
    { path: "HouseProfile", component: HouseProfileComponent },
    { path: "Rent", component: RentComponent },
    { path: "UtilityBill", component: UtilityBillComponent },
    { path: "Shopping", component: ShoppingComponent },
    { path: "AddItem", component: AddItemComponent },
    { path: "AddBill", component: AddBillComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }