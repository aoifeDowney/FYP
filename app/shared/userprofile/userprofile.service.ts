import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import * as Kinvey from "kinvey-nativescript-sdk";

import { Config } from "../config";

@Injectable()
export class UserProfileSerive {

    baseUrl = Config.apiUrl + "appdata/" + Config.appKey + "/UserProfile";

    private dataStore;

    constructor() {
        this.dataStore = Kinvey.DataStore.collection("UserProfile");
    }

    get() {
        const query = new Kinvey.Query();
        // Sort by descending “entity created time” to put new items on top.
        query.descending("_kmd.ect");
        return this.dataStore.find(query);
    }

    save(task) {
        return this.dataStore.save(task);
    }

    handleErrors(error: Kinvey.Errors.BaseError) {
        console.error(error.message);
        return Promise.reject(error.message);
    }
}