import { TodoItem } from "src/app/models/todo-list.models";
import { addTodoItem } from "./todo-list.actions";

export class TodoListState {
    todos: TodoItem[] = null;
    constructor(initialValues?: Partial<TodoListState>) {
        if (initialValues) {
            Object.assign(this, initialValues);
            this.todos = (initialValues.todos || []).map((todo: TodoItem) => new TodoItem(todo))
        }
    }
}