import { Runner } from "./abstractRunner";

export class AdultRunner extends Runner {
    pulse = 70;
    run100Meters(): void {
        this.pulse += 20;
        this.notify();
    }
}