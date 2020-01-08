import { LoginComponent } from "./login/login.component";
import { IndividualProfileComponent } from "./IndividualProfile/IndividualProfile.component";
import { ProfileComponent } from "./IndividualProfile/Profile/profile.component";

export const routes = [
    { path: "", component: LoginComponent },
    { path: "IndividualProfile", component: IndividualProfileComponent },
    { path: "Profile", component: ProfileComponent }
];

export const navigatableComponents = [
    LoginComponent,
    IndividualProfileComponent,
    ProfileComponent
];