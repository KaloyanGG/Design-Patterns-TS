import { Singleton } from "./singleton";

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

if (instance1 === instance2) {
    console.log("THEY ARE THE SAME");
} else {
    console.log("they are NOT the same");
}