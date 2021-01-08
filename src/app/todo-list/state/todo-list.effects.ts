import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { TodoListService } from "src/app/shared/services/todo-list.service";
import { addTodoItem, addTodoItemSuccess, deleteTodoItem, deleteTodoItemSuccess, getTodoItems, getTodoItemsSuccess, updateTodoItem, updateTodoItemSuccess } from "./todo-list.actions";
import { catchError, concatMap, map } from 'rxjs/operators';
import { AddTodoItemAction, TodoItem, UpdateTodoItemAction, DeleteTodoItemAction } from '../../models/todo-list.models'
import { Observable } from "rxjs";
import { Action } from "@ngrx/store";


@Injectable()
export class TodoListEffects {
    constructor(
        private actions$: Actions,
        private todoListService: TodoListService
    ) { }

    public getTodoItems$: Observable<Action> = createEffect((): Observable<Action> => {
        return this.actions$.pipe(
            ofType(getTodoItems),
            concatMap((): Observable<Action> => {
                return this.todoListService.getTodoItems().pipe(
                    map((todoItems: TodoItem[]) => getTodoItemsSuccess({todos: todoItems}))
                )
            })
        )
    });

    public addTodoItem$: Observable<Action> = createEffect((): Observable<Action> => {
        return this.actions$.pipe(
            ofType(addTodoItem),
            concatMap((action: AddTodoItemAction) => {
                return this.todoListService.addTodoItem(action.todo).pipe(
                    map((todoItem: TodoItem) => addTodoItemSuccess({todo: todoItem}))
                )
            })
        )
    });

    public updateTodoItem$: Observable<Action> = createEffect((): Observable<Action> => {
        return this.actions$.pipe(
            ofType(updateTodoItem),
            concatMap((action: UpdateTodoItemAction) => {
                return this.todoListService.updateTodoItem(action.todo).pipe(
                    map((todoItem: TodoItem) => updateTodoItemSuccess({todo: todoItem}))
                )
            })
        )
    });

    public deleteTodoItem$: Observable<Action> = createEffect((): Observable<Action> => {
        return this.actions$.pipe(
            ofType(deleteTodoItem),
            concatMap((action: DeleteTodoItemAction) => {
                return this.todoListService.deleteTodoItem(action.todo).pipe(
                    map(() => deleteTodoItemSuccess({todo: action.todo}))
                )
            })
        )
    });
}