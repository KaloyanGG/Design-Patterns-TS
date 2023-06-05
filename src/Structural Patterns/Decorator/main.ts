import { Car } from './car';
import { CarWithAC } from './decorators/car-with-AC';
import { CarWithMusic } from './decorators/car-with-music';



let simpleCar = new Car();
console.log(simpleCar.drive());

simpleCar = new CarWithMusic(simpleCar);
console.log(simpleCar.drive());

simpleCar = new CarWithAC(simpleCar);
console.log(simpleCar.drive());

