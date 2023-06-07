import IteratorInterface from "./iterator.interface";

export default class KeysIterator implements IteratorInterface {

    index = 0;

    constructor(private people: { name: string, age: number }[]) { }

    hasNext(): boolean {
        return this.index < this.people.length;
    }
    next() {
        return this.hasNext()
            ? this.people[this.index++].name
            : null;
    }

}