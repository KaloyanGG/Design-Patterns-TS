import Admin from "../person";

export default abstract class Handler {
    private next: Handler | null = null;

    abstract handle(admin: Admin): boolean;

    handleNext(admin: Admin): boolean {
        if (this.next) {
            return this.next.handle(admin);
        }
        return true;
    }

    setNextHandler(next: Handler) {
        this.next = next;
        return next;
    }
}