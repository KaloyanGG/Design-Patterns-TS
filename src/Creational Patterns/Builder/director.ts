import Builder from "./builders/builder.interface";
import CastleBuilder from "./builders/castle-builder";
import HouseBuilder from "./builders/house-builder";

export default class Director {

    constructor(public builder: Builder) { }

    setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    buildHouseWithEverything() {
        this.builder.addFloor();
        this.builder.addWalls();

        (this.builder as HouseBuilder).addWood();
    }
    buildCastleWithEverything() {
        this.builder.addFloor();
        this.builder.addWalls();

        (this.builder as CastleBuilder).addBeauty();
    }

}