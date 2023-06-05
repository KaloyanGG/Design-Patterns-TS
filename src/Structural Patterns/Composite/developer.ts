import EmployeeInterface from "./employee.interface";

export default class Developer implements EmployeeInterface {

    constructor(private name: string, private salary: number) { }

    getSalary(): number {
        return this.salary;
    }
    getName(): string {
        return this.name;
    }
    showDetails(): void {
        console.log(`-- I am developer. My name is ${this.name} and my salary is ${this.salary}.`);
    }

}