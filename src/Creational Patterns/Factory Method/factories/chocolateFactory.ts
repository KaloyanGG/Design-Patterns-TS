import { Factory } from "./factory";
import { Chocolate } from "../products/chocolate";
import { IProduct } from "../products/product.interface";

export class ChocolateFactory extends Factory {

    createProduct(): IProduct {
        return new Chocolate();
    }

}