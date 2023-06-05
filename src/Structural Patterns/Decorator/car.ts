export class Car {

    bonuses: string[] = [];

    drive(): string {
        return this.bonuses.length == 0
            ? 'Driving a car'
            : 'Driving a car with ' + this.bonuses.join(', ') + '.';
    }
    addBonus(bonus: string): void {
        if (!this.bonuses.includes(bonus)) {
            this.bonuses.push(bonus);
        }
    }
    getBonuses(): string[] {
        return this.bonuses;
    }

}
