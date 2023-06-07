import Collection from "./collection.interface";
import IteratorInterface from "./iterator.interface";
import KeysIterator from "./keys-iterator";

export default class PeopleWithAge implements Collection {

    people = [
        {
            name: 'Koko',
            age: 15,
        },
        {
            name: 'Jorko',
            age: 22,
        },
        {
            name: 'Lada',
            age: 80,
        },
    ]

    getIterator(): IteratorInterface {
        return new KeysIterator(this.people);
    }
}