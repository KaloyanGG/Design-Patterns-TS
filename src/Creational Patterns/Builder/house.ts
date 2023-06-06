export default class House {
    parts: string[] = [];
    listParts() {
        console.log(`Building a house with: ${this.parts.join(' + ')}`);
    }
}