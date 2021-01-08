import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoItem } from 'src/app/models/todo-list.models';
import { addTodoItem, deleteTodoItem, getTodoItems, updateTodoItem } from '../../state/todo-list.actions';
import { TodoListSelectors } from '../../state/todo-list.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todos$: Observable<TodoItem[]> = this.store.select(TodoListSelectors.selectTodos);
  public todoInput: string;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(getTodoItems());
  }

  public addTodoItem(): void {
    const todo: TodoItem = {completed: false, task: this.todoInput};
    this.store.dispatch(addTodoItem({todo: todo}));
  }

  public todoClicked(todoItem: TodoItem) {
    const td: TodoItem = {...todoItem, completed: !todoItem.completed};
    this.store.dispatch(updateTodoItem({todo: td}));
  }

  public deleteTodo(todoItem: TodoItem) {
    this.store.dispatch(deleteTodoItem({todo: todoItem}));
  }
}
