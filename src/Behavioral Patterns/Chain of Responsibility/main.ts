import AuthService from "./auth.service";
import PasswordHandler from "./handlers/password-handler";
import UsernameHandler from "./handlers/username-handler";
import Admin from "./person";

//Making person to check to be an admin 
const person = new Admin('adminUsername', 'adminPassword');

//Making the handler in which the person is going to go through
const handler = new UsernameHandler(person);
handler.setNextHandler(new PasswordHandler(person));

//The service which will invoke all the handler's functions
const authService = new AuthService(handler);

console.log(authService.login(person));


