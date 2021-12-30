export default class Store {
    constructor(storeObj) {
        // !!!! --- Since we wont use TS for now be aware of type checks --- !!!!

        this.store = storeObj; //do type check 
    }

    getStore() {
        return this.store;
    }

    addToStore(key, value) {
        //basic assignment need type checks
        this.store[key] = value;
    }

    remove(key) {
        delete this.store[key];
    }
}