import { Injectable } from "@angular/core";
import * as Kinvey from "kinvey-nativescript-sdk";

@Injectable()
export class TransactionsService {

    private dataStore;

    constructor() {
        this.dataStore = Kinvey.DataStore.collection("Transactions");
    }

    get() {
        const query = new Kinvey.Query();
        // Sort by descending “entity created time” to put new items on top.
        query.descending("_kmd.ect");
        return this.dataStore.find(query);
    }

    getHouseShopPrice() {
        const query = new Kinvey.Query();
        query.equalTo('type', 'House Shop');

        return this.dataStore.find(query);
    }

    getRent() {
        const query = new Kinvey.Query();
        query.equalTo('type', 'Rent');
        const secondQuery = new Kinvey.Query();
        secondQuery.equalTo('complete', true);

        return this.dataStore.find(query.and(secondQuery));
    }

    getRentNotPaid() {
        const query = new Kinvey.Query();
        query.equalTo('type', 'Rent');
        const secondQuery = new Kinvey.Query();
        secondQuery.equalTo('complete', false);

        return this.dataStore.find(query.and(secondQuery));
    }

    getUtilityBill() {
        const query = new Kinvey.Query();
        query.equalTo('type', 'Utility Bill');
        const secondQuery = new Kinvey.Query();
        secondQuery.equalTo('complete', true);

        return this.dataStore.find(query.and(secondQuery));
    }

    getUtilityBillNotPaid() {
        const query = new Kinvey.Query();
        query.equalTo('type', 'Utility Bill');
        const secondQuery = new Kinvey.Query();
        secondQuery.equalTo('complete', false);

        return this.dataStore.find(query.and(secondQuery));
    }

    save(task) {
        return this.dataStore.save(task);
    }

    handleErrors(error: Kinvey.Errors.BaseError) {
        console.error(error.message);
        return Promise.reject(error.message);
    }
}