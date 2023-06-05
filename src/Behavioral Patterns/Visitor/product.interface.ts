import VisitorInterface from "./visitor.interface";

export default interface ProductInterface {
    accept(visitor: VisitorInterface): void;
}