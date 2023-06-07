import Handler from "./handlers/abstract-handler";
import Admin from "./person";

export default class AuthService {
    constructor(private handler: Handler) { }
    login(admin: Admin): string {
        if (this.handler.handle(admin)) {
            return 'Login Successful';
        }
        return 'Login Unsuccessful';
    }
}