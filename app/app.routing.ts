import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoginComponent } from "./login/login.component";
import { IndividualProfileComponent } from "./IndividualProfile/IndividualProfile.component";
import { ProfileComponent } from "./IndividualProfile/Profile/profile.component";

const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "IndividualProfile", component: IndividualProfileComponent },
    { path: "Profile", component: ProfileComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }