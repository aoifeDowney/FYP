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
        const secondQuery = new Kinvey.Query();
        // Sort by descending “entity created time” to put new items on top.
        query.descending("_kmd.ect");
        secondQuery.equalTo('complete', true);

        return this.dataStore.find(query.and(secondQuery));
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

    getHouseShop() {
        const query = new Kinvey.Query();
        const secondQuery = new Kinvey.Query();
        const thirdQuery = new Kinvey.Query();
        query.equalTo('type', 'House Shop');
        secondQuery.equalTo('complete', false);
        thirdQuery.equalTo('bought', true);

        return this.dataStore.find(query.and(secondQuery).and(thirdQuery));
    }

    getSuggestedItem() {
        const query = new Kinvey.Query();
        const secondQuery = new Kinvey.Query();
        const thirdQuery = new Kinvey.Query();
        query.equalTo('type', 'House Shop');
        secondQuery.equalTo('complete', false);
        thirdQuery.equalTo('bought', false);

        return this.dataStore.find(query.and(secondQuery).and(thirdQuery));
    }

    getListDetail(itemName: string) {
        const query = new Kinvey.Query();
        query.equalTo('name', itemName);

        return this.dataStore.find(query);
    }
}