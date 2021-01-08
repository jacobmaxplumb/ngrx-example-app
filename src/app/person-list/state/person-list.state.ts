import { Person } from "src/app/models/person";

export class PersonListState {
    people: Person[] = null;
    constructor(initialValues?: Partial<PersonListState>) {
        if (initialValues) {
            Object.assign(this, initialValues);
            this.people = (initialValues.people || []).map((person: Person) => new Person(person))
        }
    }
}