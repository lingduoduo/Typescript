"use strict";
class Counter {
    constructor() {
        this.count = 0;
    }
    setValue(value) {
        this.count = value;
    }
    increment() {
        this.count++;
    }
    decrement() {
        this.count--;
    }
    getCount() {
        return this.count;
    }
}
