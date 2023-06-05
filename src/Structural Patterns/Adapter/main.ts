import ThirdPartyLineSpeaker from "./adaptee";
import Adapter from "./adapter";
import Speech from "./target";

//* Speech which is the target which we are going to wrap
const target = new Speech();
console.log(target.speak());

console.log('');

//* Third party library or legacy code which we are going to use in our adapter and now works strange ( Adaptee )
const thirdPartyLineSpeaker = new ThirdPartyLineSpeaker();
console.log('ThirdParty adaptee: ' + thirdPartyLineSpeaker.speakReversed());

console.log('');

//* The adapter which makes the Adaptee's interface compatible with the Target's interface.
const adapter = new Adapter(thirdPartyLineSpeaker);
console.log('Adapter: ' + adapter.speak());


