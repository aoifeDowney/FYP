import { Injectable } from "@angular/core";
import * as Kinvey from "kinvey-nativescript-sdk";

@Injectable()
export class TransactionsService {

    private dataStore;
    activeUser = Kinvey.User.getActiveUser();

    constructor() {
        this.dataStore = Kinvey.DataStore.collection("Transactions");
    }

    save(task) {
        return this.dataStore.save(task);
    }

    get() {
        const query = new Kinvey.Query();
        const secondQuery = new Kinvey.Query();
        const thirdQuery = new Kinvey.Query();
        // Sort by descending “entity created time” to put new items on top.
        query.descending("_kmd.ect");
        secondQuery.equalTo('complete', true);
        thirdQuery.equalTo("_acl.creator", this.activeUser._acl.creator);

        return this.dataStore.find(query.and(secondQuery).and(thirdQuery));
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
        const thirdQuery = new Kinvey.Query();
        thirdQuery.equalTo('houseName', 'Galway');

        return this.dataStore.find(query.and(secondQuery).and(thirdQuery));
    }

    getRentNotPaid() {
        const query = new Kinvey.Query();
        query.equalTo('type', 'Rent');
        const secondQuery = new Kinvey.Query();
        secondQuery.equalTo('complete', false);
        const thirdQuery = new Kinvey.Query();
        thirdQuery.equalTo('houseName', 'Galway');

        return this.dataStore.find(query.and(secondQuery).and(thirdQuery));
    }


    getAllUtilityBills() {
        const query = new Kinvey.Query();
        query.equalTo('type', 'Utility Bill');
        const secondQuery = new Kinvey.Query();
        secondQuery.equalTo('houseName', 'Galway');

        return this.dataStore.find(query.and(secondQuery));
    }

    getUtilityBill() {
        const query = new Kinvey.Query();
        query.equalTo('type', 'Utility Bill');
        const secondQuery = new Kinvey.Query();
        secondQuery.equalTo('complete', true);
        const thirdQuery = new Kinvey.Query();
        thirdQuery.equalTo('houseName', 'Galway');

        return this.dataStore.find(query.and(secondQuery).and(thirdQuery));
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
        const fourthQuery = new Kinvey.Query();
        query.equalTo('type', 'House Shop');
        secondQuery.equalTo('complete', false);
        thirdQuery.equalTo('bought', true);
        fourthQuery.equalTo('houseName', 'Galway');

        return this.dataStore.find(query.and(secondQuery).and(thirdQuery).and(fourthQuery));
    }

    getSuggestedItem() {
        const query = new Kinvey.Query();
        const secondQuery = new Kinvey.Query();
        const thirdQuery = new Kinvey.Query();
        const fourthQuery = new Kinvey.Query();
        query.equalTo('type', 'House Shop');
        secondQuery.equalTo('complete', false);
        thirdQuery.equalTo('bought', false);
        fourthQuery.equalTo('houseName', 'Galway');

        return this.dataStore.find(query.and(secondQuery).and(thirdQuery).and(fourthQuery));
    }

    getHouseholdMembers(householdName: string) {
        const query = new Kinvey.Query();
        query.equalTo('houseName', householdName);

        return this.dataStore.find(query);
    }
}