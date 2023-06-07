import StrategyInterface from "./strategies/strategy.interface";

export default class NumbersArrayModifier {
    constructor(private strategy: StrategyInterface) { }
    setStrategy(strategy: StrategyInterface) {
        this.strategy = strategy;
    }
    modify(numbers: number[]): number[] {
        return this.strategy.modify(numbers);
    }
}