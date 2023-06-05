import { Observable } from "../observable.interface";
import { Observer } from "../observer.interface";

export abstract class Runner implements Observable {
    abstract pulse: Number;
    private observers: Observer[] = [];

    subscribe(observer: Observer): void {
        this.observers.push(observer);
    }
    unsubscribe(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        this.observers.splice(observerIndex, 1);
    }
    notify(): void {
        this.observers.forEach(observer => observer.update(this));
    }
    abstract run100Meters(): void;
}
