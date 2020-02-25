import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";

import * as Kinvey from "kinvey-nativescript-sdk";

import { User } from "./user.model";
import { Config } from "../config";

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    login(user: User) {
        return Kinvey.User.login({
            username: user.email,
            password: user.password
        });
    }

    logout() {
        return Kinvey.User.logout();
    }

    addHousehold(user: User) {
        return Promise.resolve(Kinvey.User.getActiveUser())
            .then((user: Kinvey.User) => {
                if (user) {
                    return user.update({
                        household: "Galway"
                    });
                }
                return user;
            });
    }

    register(user: User) {
        return Kinvey.User.signup({
            username: user.username,
            email: user.email,
            password: user.password,
            household: user.household
        });
    }

    getCommonHeaders() {
        return {
            "Content-Type": "application/json",
            "Authorization": Config.authHeader
        }
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error));
        return throwError(error);
    }
}