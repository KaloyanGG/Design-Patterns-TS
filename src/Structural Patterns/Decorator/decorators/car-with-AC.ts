import { Car } from "../car";

export class CarWithAC extends Car {

    constructor(protected car: Car) {
        super();
        car.getBonuses().forEach(bonus => {
            this.addBonus(bonus);
        });
        this.addBonus('AC');

    }

}