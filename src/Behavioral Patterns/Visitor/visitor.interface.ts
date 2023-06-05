import Book from "./book";
import Fruit from "./fruit";

export default interface VisitorInterface {
    visitFruit(product: Fruit): void;
    visitBook(product: Book): void;
}