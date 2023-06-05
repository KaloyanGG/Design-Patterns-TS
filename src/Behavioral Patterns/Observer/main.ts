import { AdultRunner } from "./observables/adultRunner";
import { ChildRunner } from "./observables/childRunner";
import { AppleWatch } from "./observers/appleWatch";
import { SpecialEquipmentForDanger } from "./observers/dangerEquipment";

const adultRunner = new AdultRunner();

//ADDING EQUIPMENT
adultRunner.subscribe(new AppleWatch());
adultRunner.subscribe(new SpecialEquipmentForDanger());

//RUNNING
adultRunner.run100Meters();
adultRunner.run100Meters();
adultRunner.run100Meters();
adultRunner.run100Meters();
adultRunner.run100Meters();
adultRunner.run100Meters();


const childRunner = new ChildRunner();

//ADDING EQUIPMENT
childRunner.subscribe(new SpecialEquipmentForDanger());

//RUNNING
childRunner.run100Meters();
childRunner.run100Meters();
childRunner.run100Meters();
childRunner.run100Meters();




