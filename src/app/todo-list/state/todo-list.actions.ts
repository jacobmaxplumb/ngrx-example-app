import { createAction, props } from "@ngrx/store";
import { TodoItem } from "src/app/models/todo-list.models";

export const addTodoItem = createAction(
    '[Todo List Page Action] Add Todo Item',
    props<{ todo: TodoItem }>()
);

export const addTodoItemSuccess = createAction(
    '[Todo List API Action] Add Todo Item Success',
    props<{ todo: TodoItem }>()
)

export const deleteTodoItem = createAction(
    '[Todo List Page Action] Delete Todo Item',
    props<{ todo: TodoItem }>()
)

export const deleteTodoItemSuccess = createAction(
    '[Todo List API Action] Delete Todo Item Success',
    props<{ todo: TodoItem }>()
)

export const getTodoItems = createAction(
    '[Todo List Page Action] Get Todo Items'
)

export const getTodoItemsSuccess = createAction(
    '[Todo List API Action] Get Todo Items Success',
    props<{todos: TodoItem[]}>()
);

export const updateTodoItem = createAction(
    '[Todo List Page Action] Update Todo Item',
    props<{ todo: TodoItem }>()
);

export const updateTodoItemSuccess = createAction(
    '[Todo List API Action] Update Todo Item Success',
    props<{ todo: TodoItem }>()
);