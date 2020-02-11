import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

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

    register(user: User) {
        if (!user.email || !user.password) {
            return throwError("Please provide both an email address and password.");
        }

        return this.http.post(
            Config.apiUrl + "user/" + Config.appKey,
            JSON.stringify({
                username: user.email,
                email: user.email,
                password: user.password
            }),
            { headers: this.getCommonHeaders() }
        ).pipe(
            catchError(this.handleErrors)
        );
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