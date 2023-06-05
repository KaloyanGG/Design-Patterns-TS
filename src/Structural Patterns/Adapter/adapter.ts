import ThirdPartyLineSpeaker from "./adaptee";
import Speech from "./target";

export default class Adapter extends Speech {
    constructor(private reverseSpeaker: ThirdPartyLineSpeaker) {
        super();
    }

    public speak(): string {
        return `(Translated) ${this.reverseSpeaker.speakReversed().split('').reverse().join('')}.`;
    }
}