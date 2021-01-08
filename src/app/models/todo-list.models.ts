export class TodoItem {
    _id?: string = null;
    completed: boolean = null;
    task: string = null;
    constructor(intitialValues?: Partial<TodoItem>) {
        if (intitialValues) Object.assign(this, intitialValues);
    }
}

// actions
export interface AddTodoItemAction {
    todo: TodoItem;
}

export interface AddTodoItemSuccessAction {
    todo: TodoItem;
}

export interface GetTodoItemsSuccessAction {
    todos: TodoItem[];
}

export interface UpdateTodoItemAction {
    todo: TodoItem;
}

export interface UpdateTodoItemSuccessAction {
    todo: TodoItem;
}

export interface DeleteTodoItemAction {
    todo: TodoItem;
}

export interface DeleteTodoItemSuccessAction {
    todo: TodoItem;
}