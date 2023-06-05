import FoodFactoryInterface from "./food-factory-interface";
import { Tomato, Potato, Onion, Garlic } from "../food/food.classes";
import Food from "../food/food.interface";

export default class VegetableFactory implements FoodFactoryInterface {
    buyVegetable(vegetable: string): Food | undefined {
        switch (vegetable) {
            case 'tomato':
                return new Tomato();
            case 'potato':
                return new Potato();
            case 'onion':
                return new Onion();
            case 'garlic':
                return new Garlic();
            default:
                break;
        }
    }
}