import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";

import { LoginComponent } from "./login/login.component";
import { IndividualProfileComponent } from "./IndividualProfile/IndividualProfile.component";
import { ProfileComponent } from "./IndividualProfile/Profile/profile.component";
import { EditProfileComponent } from "./IndividualProfile/EditProfile/editprofile.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    NativeScriptRouterModule,
    NativeScriptUIListViewModule,
    NativeScriptUISideDrawerModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    IndividualProfileComponent,
    ProfileComponent,
    EditProfileComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }