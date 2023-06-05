import ProductInterface from "./product.interface";
import VisitorInterface from "./visitor.interface";

export default class Book implements ProductInterface {
    constructor(private name: string, private price: number) { }
    accept(visitor: VisitorInterface): void {
        visitor.visitBook(this);
    }
    getName(): string {
        return this.name;
    }
    getPrice(): number {
        return this.price;
    }
}