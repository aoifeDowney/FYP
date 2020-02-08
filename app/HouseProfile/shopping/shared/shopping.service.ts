import { Injectable } from "@angular/core";

@Injectable()
export class ShoppingService {

    itemName: string;

    getName(name: string) {
        this.itemName = name;
    }
}