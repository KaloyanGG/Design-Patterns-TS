import { Observable } from "./observable.interface";

export interface Observer {
    update(subject: Observable): void;
}
