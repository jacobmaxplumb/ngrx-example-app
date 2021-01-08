export class SharedState {
    public title: string = null;
    constructor(initialValues?: Partial<SharedState>) {
        if (initialValues) Object.assign(this, initialValues);
    }
}