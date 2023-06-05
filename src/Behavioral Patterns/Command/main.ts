interface ICommand {
    execute(lights: Lights): void;
}

class TurnOnLightsCommand implements ICommand {
    execute(lights: Lights): void {
        console.log('Turning the lights on!');
        lights.mode = 'on';
    }
}
class TurnOffLightsCommand implements ICommand {
    execute(lights: Lights): void {
        console.log('Turning the lights off!');
        lights.mode = 'off';
    }
}
class TurnRedLightsCommand implements ICommand {
    execute(lights: Lights): void {
        console.log('Turning the lights red!');
        lights.mode = 'red';
    }
}

class TurnLightsOffThenRedThenOnCommand implements ICommand {
    constructor(private turnLightsOffCommand = new TurnOffLightsCommand(),
        private turnLightsRedCommand = new TurnRedLightsCommand()) {

    }
    execute(lights: Lights): void {
        this.turnLightsOffCommand.execute(lights);
        this.turnLightsRedCommand.execute(lights);
    }
    undo(): void {
        throw new Error("Method not implemented.");
    }
}


class Lights {
    mode: string = 'off';
    commands: ICommand[] = [];
}

class RemoteController {
    constructor(private lights: Lights) {
        this.lights = lights;
    }
    do(command: ICommand) {
        command.execute(this.lights);
        this.lights.commands.push(command);
    }
    undo() {

        if (this.lights.commands.length < 2) {
            new TurnOffLightsCommand().execute(this.lights);
            this.lights.commands = [];
            return;
        }
        const command = this.lights.commands.pop();
        this.lights.commands[this.lights.commands.length - 1]
            .execute(this.lights);

    }
}

const lights = new Lights();
const remoteController = new RemoteController(lights);

remoteController.do(new TurnRedLightsCommand());
remoteController.do(new TurnOnLightsCommand());
remoteController.do(new TurnOnLightsCommand());
remoteController.undo();
remoteController.undo();
// remoteController.do(new TurnOffLightsCommand());
// remoteController.do(new TurnOnLightsCommand());

// remoteController.do(new TurnLightsOffThenRedThenOnCommand());

console.log('\nNow the lights are: ' + lights.mode);

// console.log('hi');


