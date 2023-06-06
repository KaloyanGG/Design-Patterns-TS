import Castle from "../castle";
import Builder from "./builder.interface";

export default class CastleBuilder implements Builder {
    castle: Castle = new Castle;

    constructor() {
        this.castle = new Castle();
    }
    public reset(): void {
        this.castle = new Castle();
    }

    addFloor(): void {
        this.castle.parts.push('floor for castle');

    }
    addWalls(): void {
        this.castle.parts.push('walls for castle');
    }
    addBeauty(): void {
        this.castle.parts.push('beauty');
    }
    build(): Castle {
        const result = this.castle;
        this.reset();
        return result;
    }

}