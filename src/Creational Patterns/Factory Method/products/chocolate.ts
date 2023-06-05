import { IProduct } from "./product.interface";

export class Chocolate implements IProduct {

    prepare(): void {
        console.log('Chocolate is being prepared');
    }

}