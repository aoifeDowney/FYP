import { LoginComponent } from "./login/login.component";
import { IndividualProfileComponent } from "./IndividualProfile/IndividualProfile.component";

export const routes = [
    { path: "", component: LoginComponent },
    { path: "IndividualProfile", component: IndividualProfileComponent }
];

export const navigatableComponents = [
    LoginComponent,
    IndividualProfileComponent
];