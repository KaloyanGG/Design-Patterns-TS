import NumbersArrayModifier from "./context";
import FirstTheEvenThenTheOdd from "./strategies/first-even-then-odd-strategy";
import SortFromLowToHigh from "./strategies/sort.strategy";


let arrayOfNumbers = [3, 10, 11, 4, 28, 1, -5, -249, 0];

//Making a strategy
const normalSort = new SortFromLowToHigh();
//Making a modifier with that strategy
const modifier = new NumbersArrayModifier(normalSort);

console.log(modifier.modify(arrayOfNumbers.slice()));

//Changing the modifier's strategy
modifier.setStrategy(new FirstTheEvenThenTheOdd());
console.log(modifier.modify(arrayOfNumbers.slice()));

// console.log(arrayOfNumbers);