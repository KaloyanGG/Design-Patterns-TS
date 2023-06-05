import Book from "./book";
import Fruit from "./fruit";
import PriceCalc from "./price-calculator";


const apple = new Fruit("Apple", 2, 3.50);
const book = new Book("KingK", 50);

const calc = new PriceCalc();

const applePrice = calc.visitFruit(apple);
const bookPrice = calc.visitBook(book);

console.log('All: ', applePrice + bookPrice);




