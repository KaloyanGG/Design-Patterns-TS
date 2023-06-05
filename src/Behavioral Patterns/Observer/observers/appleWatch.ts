import { Observable } from "../observable.interface";
import { AdultRunner } from "../observables/adultRunner";
import { ChildRunner } from "../observables/childRunner";
import { Observer } from "../observer.interface";


export class AppleWatch implements Observer {
    update(subject: Observable): void {
        if (subject instanceof AdultRunner) {
            if (subject.pulse > 120) {
                console.log('You are running too fast! Slow down!');
            }
        } else if (subject instanceof ChildRunner) {
            if (subject.pulse > 130) {
                console.log('You are running too fast! Slow down!');
            }
        }
    }
}