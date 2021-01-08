import { createReducer, on } from "@ngrx/store";
import { AddTodoItemSuccessAction, GetTodoItemsSuccessAction, UpdateTodoItemSuccessAction, DeleteTodoItemSuccessAction } from "src/app/models/todo-list.models";
import { addTodoItemSuccess, deleteTodoItemSuccess, getTodoItemsSuccess, updateTodoItemSuccess } from "./todo-list.actions";
import { TodoListState } from "./todo-list.state";

const initialState: TodoListState = { todos: []}

export const todoListReducer = createReducer(
    initialState,
    on(
        getTodoItemsSuccess,
        (state: TodoListState, action: GetTodoItemsSuccessAction): TodoListState => {
            return {
                ...state,
                todos: action.todos
            }
        }
    ),
    on(
        addTodoItemSuccess,
        (state: TodoListState, action: AddTodoItemSuccessAction): TodoListState => {
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        }
    ),
    on(
        updateTodoItemSuccess,
        (state: TodoListState, action: UpdateTodoItemSuccessAction): TodoListState => {
            return {
                ...state,
                todos: [...state.todos.filter(td => td._id !== action.todo._id), action.todo]
            }
        }
    ),
    on(
        deleteTodoItemSuccess,
        (state: TodoListState, action: DeleteTodoItemSuccessAction): TodoListState => {
            return {
                ...state,
                todos: [...state.todos.filter(td => td._id !== action.todo._id)]
            }
        }
    )
)