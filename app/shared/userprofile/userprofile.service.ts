import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Config } from "../config";
import { UserProfile } from "./userprofile.model";

@Injectable()
export class UserProfileSerive {

    baseUrl = Config.apiUrl + "appdata/" + Config.appKey + "/UserProfile";

    constructor(private http: HttpClient) { }

    load() {
        // Kinvey-specific syntax to sort the groceries by last modified time. Don’t worry about the details here.
        let params = {
            "sort": "{\"_kmd.lmt\": 1}"
        };

        return this.http.get(this.baseUrl, {
            headers: this.getCommonHeaders(),
            params: params
        }).pipe(
            map((data: []) => {
                let profile = [];
                data.forEach((userProfile) => {
                    profile.push(new UserProfile((<any>userProfile)._id, (<any>userProfile).Username));
                });
                return profile;
            }),
            catchError(this.handleErrors)
        );
    }

    update(profile: UserProfile): Observable <UserProfile> {
        return this.http.put<UserProfile>(this.baseUrl, profile, {
            headers: this.getCommonHeaders()}
            ).pipe(
                catchError(this.handleErrors)
            );
    }

    getCommonHeaders() {
        return {
            "Content-Type": "application/json",
            "Authorization": "Kinvey " + Config.token
        }
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return throwError(error);
    }

}