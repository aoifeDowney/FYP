import { Injectable } from "@angular/core";
import * as Kinvey from "kinvey-nativescript-sdk";

Kinvey.init({
    appKey: "kid_BJAu9c4iS",
    appSecret: "26535fc520564e36a6c8e4227e37ca18"
});

export class BackendService {
    static isUserLoggedIn() {
        return !!Kinvey.User.getActiveUser();
    }
}