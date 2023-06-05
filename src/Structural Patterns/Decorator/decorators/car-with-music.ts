import { Car } from "../car";

export class CarWithMusic extends Car {

    constructor(protected car: Car) {
        super();
        car.getBonuses().forEach(bonus => {
            this.addBonus(bonus);
        });
        this.addBonus('Music');

    }

}