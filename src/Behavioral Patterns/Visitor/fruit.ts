import ProductInterface from "./product.interface";
import VisitorInterface from "./visitor.interface";

export default class Fruit implements ProductInterface {

    constructor(private name: string, private weightInKG: number, private pricePerKG: number) { }

    accept(visitor: VisitorInterface): void {
        visitor.visitFruit(this);
    }
    getName(): string {
        return this.name;
    }
    getWeightInKG(): number {
        return this.weightInKG;
    }
    getPricePerKG(): number {
        return this.pricePerKG;
    }

    // accept = (visitor: VisitorInterface) : void =>{
    //     visitor.visit(this);
    // }
}