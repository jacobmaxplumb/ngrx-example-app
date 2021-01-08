import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoListState } from "./todo-list.state";

const selectTodoListState = createFeatureSelector<TodoListState>("todo-list");

const selectTodos = createSelector(
    selectTodoListState,
    (state: TodoListState) => state.todos
)

export const TodoListSelectors = {
    selectTodos
}