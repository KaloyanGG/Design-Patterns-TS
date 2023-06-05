import FoodAbstractFactory from "./factories/food-abstract-factory";


//Food factory with fruit and vegetable factories
const foodFactory = new FoodAbstractFactory();

const tomato = foodFactory.buy('tomatoo');
tomato?.buyFood();

const apple = foodFactory.buy('apple');
apple?.buyFood();

