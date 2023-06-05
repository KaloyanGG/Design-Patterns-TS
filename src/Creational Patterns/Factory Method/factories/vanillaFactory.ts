import { IProduct } from "../products/product.interface";
import { Vanilla } from "../products/vanilla";
import { Factory } from "./factory";

export class VanillaFactory extends Factory {

    createProduct(): IProduct {
        const vanilla = new Vanilla();
        return vanilla;
    }

}