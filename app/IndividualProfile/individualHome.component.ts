import { Component } from "@angular/core";

import { User } from "../shared/user/user.model";
import { UserService } from "../shared/user/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "gr-individualHome",
  moduleId: module.id,
  templateUrl: "./individualHome.component.html",
  styleUrls: ["./individualHome.component.css"]
})
export class IndividualHomeComponent {
  user: User;

  constructor(private router: Router, private userService: UserService) {
    this.user = new User();
  }
}