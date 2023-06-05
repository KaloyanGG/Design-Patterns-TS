import { IProduct } from "../products/product.interface";

export abstract class Factory {

    public abstract createProduct(): IProduct;

    public initialize(): void {
        const product = this.createProduct();
        product.prepare();
    }

}