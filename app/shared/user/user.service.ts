import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";

import * as Kinvey from "kinvey-nativescript-sdk";
import { TransactionsService } from "../transactions/transactions.service";

import { User } from "./user.model";
import { Config } from "../config";

@Injectable()
export class UserService {

    users = [];

    constructor(private http: HttpClient, private transactionsService: TransactionsService) { }

    login(user: User) {
        return Kinvey.User.login({
            username: user.username,
            password: user.password
        });
    }

    logout() {
        return Kinvey.User.logout();
    }

    addHousehold(user: User) {
        var task = {
            userName: user.username,
            houseName: user.household,
            user: true
        };

        this.transactionsService.save(task).then((newTask) => {
            this.users.unshift(newTask);
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