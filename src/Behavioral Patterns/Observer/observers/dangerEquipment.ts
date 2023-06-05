import { Runner } from "../observables/abstractRunner";
import { AdultRunner } from "../observables/adultRunner";
import { ChildRunner } from "../observables/childRunner";
import { Observer } from "../observer.interface";

export class SpecialEquipmentForDanger implements Observer {
    update(subject: Runner): void {
        if (subject instanceof AdultRunner) {
            if (subject.pulse > 150) {
                console.log('STOP IMMEDIATELY');
            }
        } else if (subject instanceof ChildRunner) {
            if (subject.pulse > 160) {
                console.log('STOP IMMEDIATELY');
            }
        }

    }
}