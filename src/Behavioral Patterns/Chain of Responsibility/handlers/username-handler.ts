import Admin from "../person";
import Handler from "./abstract-handler";

export default class UsernameHandler extends Handler {

    constructor(private admin: Admin) {
        super();
        this.admin = admin;
    }

    handle(admin: Admin): boolean {

        if (!this.admin.isRightUsername(admin.username)) {
            console.log('Wrong username');
            return false;
        }
        return this.handleNext(admin);
    }
}