import Developer from "./developer";
import Manager from "./manager";

const emp1 = new Developer('John', 1000);
emp1.showDetails();
const emp2 = new Developer('David', 1500);

const manager = new Manager('Daniel', 2500);

manager.add(emp1);
manager.add(emp2);
manager.showDetails();

const emp3 = new Developer('Michael', 2000);

const boss = new Manager('Boss', 5000);
boss.add(emp3);
boss.add(manager);
boss.showDetails();

