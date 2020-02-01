import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoginComponent } from "./login/login.component";
import { IndividualProfileComponent } from "./IndividualProfile/IndividualProfile.component";
import { ProfileComponent } from "./IndividualProfile/Profile/profile.component";
import { EditProfileComponent } from "./IndividualProfile/EditProfile/editprofile.component";
import { CalendarComponent } from "./IndividualProfile/Calendar/calendar.component";

import { BackendService } from "./shared/backend.service";

const routes: Routes = [
    { path: "", redirectTo: BackendService.isUserLoggedIn() ? "/IndividualProfile" : "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "IndividualProfile", component: IndividualProfileComponent },
    { path: "Profile", component: ProfileComponent },
    { path: "EditProfile", component: EditProfileComponent },
    { path: "Calendar", component: CalendarComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }