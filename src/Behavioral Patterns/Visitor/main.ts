import Book from "./book";
import Fruit from "./fruit";
import PriceCalc from "./price-calculator";

//* Apple and book which are *visitable* and have *accept* methods
const apple = new Fruit("Apple", 2, 3.50);
const book = new Book("KingK", 50);

//* Calc which is the visitor who will *visit* the *visitable* and they will *accept* it
const calc = new PriceCalc();

//* Visiting the products and returning their price
const applePrice = calc.visitFruit(apple);
const bookPrice = calc.visitBook(book);

console.log('All: ', applePrice + bookPrice);




