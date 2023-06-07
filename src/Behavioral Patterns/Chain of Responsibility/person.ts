export default class Admin {
    rightPassword = 'adminPassword';
    rightUsername = 'adminUsername';
    constructor(public username: string, public password: string) { }

    isRightUsername(username: string) {
        return username === this.rightUsername;
    }
    isRightPassword(password: string) {
        return password === this.rightPassword;
    }
}