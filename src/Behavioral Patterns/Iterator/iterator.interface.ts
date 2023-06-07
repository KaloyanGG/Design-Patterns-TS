export default interface IteratorInterface {
    index: number;
    hasNext(): boolean;
    next(): any;
}