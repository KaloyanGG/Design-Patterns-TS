import { IProduct } from "./product.interface";

export class Vanilla implements IProduct {

    prepare(): void {
        console.log('Vanilla is being prepared');
    }

}