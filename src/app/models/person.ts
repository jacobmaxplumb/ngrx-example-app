export class Person {
    _id: string = null;
    firstName: string = null;
    lastName: string = null;
    age: number = null;
    constructor(initialValues?: Partial<Person>) {
        if (initialValues) Object.assign(this, initialValues);
    }
}