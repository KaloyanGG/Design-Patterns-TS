export default class Castle {
    parts: string[] = [];
    listParts() {
        console.log(`Building a castle with: ${this.parts.join(' + ')}`);
    }
}