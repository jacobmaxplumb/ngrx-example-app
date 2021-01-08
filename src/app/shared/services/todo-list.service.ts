import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TodoItem } from "src/app/models/todo-list.models";

@Injectable({
    providedIn: 'root'
})
export class TodoListService {

    private apiUrl: string = 'http://localhost:3000/tasks';

    constructor(private http: HttpClient) {}

    public getTodoItems(): Observable<TodoItem[]> {
        return this.http.get<TodoItem[]>(this.apiUrl);
    }

    public addTodoItem(todo: TodoItem): Observable<TodoItem> {
        return this.http.post<TodoItem>(this.apiUrl, todo);
    }

    public updateTodoItem(todo: TodoItem): Observable<TodoItem> {
        return this.http.put<TodoItem>(`${this.apiUrl}/${todo._id}`, todo);
    }

    public deleteTodoItem(todo: TodoItem): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/${todo._id}`);
    }
}