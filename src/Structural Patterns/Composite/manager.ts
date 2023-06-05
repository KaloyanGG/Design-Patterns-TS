import EmployeeInterface from "./employee.interface";

export default class Manager implements EmployeeInterface {

    employeeList: EmployeeInterface[];

    constructor(private name: string, private salary: number) {
        this.employeeList = [];
    }

    add(employee: EmployeeInterface): void {
        this.employeeList.push(employee);
    }

    getSalary(): number {
        return this.salary;
    }
    getName(): string {
        return this.name;
    }
    showDetails(): void {
        console.log(`I am manager. My name is ${this.name} and my salary is ${this.salary}.`);

        this.employeeList.forEach(e => {
            e.showDetails();
        });
    }

}
