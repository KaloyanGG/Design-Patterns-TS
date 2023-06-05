import Food from "../food/food.interface";
import FruitFactory from "./fruit-factory";
import VegetableFactory from "./vegetable-factory";

const vegetables = ['tomato', 'potato', 'onion', 'garlic'];
const fruits = ['apple', 'banana', 'orange', 'grape'];

export default class FoodAbstractFactory {

    private fruitFactory: FruitFactory = new FruitFactory();
    private vegetableFactory: VegetableFactory = new VegetableFactory();

    buy(food: string): Food | undefined {
        if (fruits.includes(food)) {
            return this.fruitFactory.buyFruit(food);
        } else if (vegetables.includes(food)) {
            return this.vegetableFactory.buyVegetable(food);
        } else {
            console.log('No such food');
        }
    }

}