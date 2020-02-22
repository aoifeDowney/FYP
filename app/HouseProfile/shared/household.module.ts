import { Injectable } from '@angular/core';

@Injectable()

export class Household {
    private name: string;

    constructor() {}

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}