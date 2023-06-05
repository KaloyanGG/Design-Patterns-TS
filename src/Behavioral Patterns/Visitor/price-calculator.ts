import Book from "./book";
import Fruit from "./fruit";
import VisitorInterface from "./visitor.interface";

export default class PriceCalc implements VisitorInterface {

    visitFruit(product: Fruit) {
        const price = product.getPricePerKG() * product.getWeightInKG()
        console.log(`Fruit: ${product.getName()} with price: ${price}lv.`)
        return price;
    };
    visitBook(product: Book) {
        const price = product.getPrice() - 5;
        console.log(`Book: ${product.getName()} with price: ${product.getPrice()}lv.`);
        return price
    };
}