import { ChocolateFactory } from "./factories/chocolateFactory";
import { Factory } from "./factories/factory";
import { VanillaFactory } from "./factories/vanillaFactory";


function prepareProduct(factory: Factory) {
    console.log("I do not know what Type of Factory is this, but it still works.");
    factory.initialize();
}

prepareProduct(new ChocolateFactory());
console.log(' ');
prepareProduct(new VanillaFactory());