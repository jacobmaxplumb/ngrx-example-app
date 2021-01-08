import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { todoListReducer } from "./state/todo-list.reducer";

@NgModule({
    declarations: [TodoListComponent],
    imports: [
        CommonModule,
        FormsModule,
        StoreModule.forFeature('todo-list', todoListReducer)
    ]
})
export class TodoListModule { }