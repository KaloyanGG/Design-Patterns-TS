import { Runner } from "./abstractRunner";

export class ChildRunner extends Runner {
    pulse = 80;
    run100Meters(): void {
        this.pulse += 30;
        this.notify();
    }
}
