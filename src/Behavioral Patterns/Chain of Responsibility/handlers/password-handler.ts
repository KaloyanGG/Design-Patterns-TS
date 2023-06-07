import Admin from "../person";
import Handler from "./abstract-handler";


export default class PasswordHandler extends Handler {

    constructor(private admin: Admin) {
        super();
        this.admin = admin;
    }

    handle(admin: Admin): boolean {
        if (!this.admin.isRightPassword(admin.password)) {
            console.log('Wrong password');
            return false;
        }
        return this.handleNext(admin);
    }
}