import FoodFactoryInterface from "./food-factory-interface";
import { Apple, Banana, Grape, Orange } from "../food/food.classes";
import Food from "../food/food.interface";

export default class FruitFactory implements FoodFactoryInterface {
    buyFruit(fruit: string): Food | undefined {
        switch (fruit) {
            case 'apple':
                return new Apple();
            case 'banana':
                return new Banana();
            case 'orange':
                return new Orange();
            case 'grape':
                return new Grape();
            default:
                break;
        }
    }
}