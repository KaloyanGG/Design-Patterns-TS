import StrategyInterface from "./strategy.interface";

export default class SortFromHighToLow implements StrategyInterface {
    modify(numbers: number[]): number[] {
        console.log('-- Using the SortFromHighToLow Strategy --');
        return numbers.sort().reverse();
    }
}