import { LoginComponent } from "./login/login.component";
import { ListComponent } from "./list/list.component";
import { IndividualHomeComponent } from "./IndividualProfile/individualHome.component";

export const routes = [
    { path: "", component: LoginComponent },
    { path: "list", component: ListComponent },
    { path: "individualHome", component: IndividualHomeComponent }
];

export const navigatableComponents = [
    LoginComponent,
    ListComponent,
    IndividualHomeComponent
];