import { Observer } from "./observer.interface";

export interface Observable {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(): void;
}