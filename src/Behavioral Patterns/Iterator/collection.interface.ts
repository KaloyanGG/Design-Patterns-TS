import IteratorInterface from "./iterator.interface";

export default interface Collection {
    getIterator(): IteratorInterface;
}