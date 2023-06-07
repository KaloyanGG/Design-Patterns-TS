import StrategyInterface from "./strategy.interface";

export default class SortFromLowToHigh implements StrategyInterface {
    modify(numbers: number[]): number[] {
        console.log('-- Using the SortFromLowToHigh Strategy --');
        return numbers.sort();
    }
}