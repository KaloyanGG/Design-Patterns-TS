import House from "../house";
import Builder from "./builder.interface";

export default class HouseBuilder implements Builder {
    house: House;
    constructor() {
        this.house = new House();
    }
    public reset(): void {
        this.house = new House();
    }

    addFloor(): void {
        this.house.parts.push('floor for house');
    }
    addWalls(): void {
        this.house.parts.push('walls for house');
    }
    addWood(): void {
        this.house.parts.push('wood');
    }
    public build() {
        const result = this.house;
        this.reset();
        return result;
    }
}