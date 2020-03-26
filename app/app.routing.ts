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
import { AddBillComponent } from "./HouseProfile/utilityBill/addBill/addBill.component";
import { AddItemComponent } from "./HouseProfile/shopping/addItem/addItem.component";
import { SuggestItemComponent } from "./HouseProfile/shopping/suggestItem/suggestItem.component";
import { DetailComponent } from "./HouseProfile/utilityBill/detail/detail.component";
import { AddRentComponent } from "./HouseProfile/rent/addrent/addrent.component";

import { BackendService } from "./shared/backend.service";

const routes: Routes = [
    { path: "", redirectTo: BackendService.isUserLoggedIn() ? "/HouseProfile" : "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "IndividualProfile", component: IndividualProfileComponent },
    { path: "Profile", component: ProfileComponent },
    { path: "EditProfile", component: EditProfileComponent },
    { path: "Calendar", component: CalendarComponent },
    { path: "HouseProfile", component: HouseProfileComponent },
    { path: "Rent", component: RentComponent },
    { path: "UtilityBill", component: UtilityBillComponent },
    { path: "Shopping", component: ShoppingComponent },
    { path: "SuggestItem", component: SuggestItemComponent },
    { path: "AddBill", component: AddBillComponent },
    { path: "AddItem", component: AddItemComponent },
    { path: "Detail", component: DetailComponent },
    { path: "AddRent", component: AddRentComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }