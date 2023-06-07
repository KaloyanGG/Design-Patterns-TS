import StrategyInterface from "./strategy.interface";

export default class FirstTheEvenThenTheOdd implements StrategyInterface {
    modify(numbers: number[]): number[] {
        console.log('-- Using the FirstThenEvenThenTHeOdd Strategy --');
        const even: number[] = numbers.filter(n => n % 2 === 0);
        const odd: number[] = numbers.filter(n => n % 2 !== 0);
        return [...even, ...odd];
    }
}
