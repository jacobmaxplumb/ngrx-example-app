import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Person } from "src/app/models/person";

@Injectable({
    providedIn: 'root'
})
export class PersonListService {

    private apiUrl: string = 'http://localhost:3000/people';

    constructor(private http: HttpClient) {}

    public getPersons(): Observable<Person[]> {
        return this.http.get<Person[]>(this.apiUrl);
    }

    public addPerson(todo: Person): Observable<Person> {
        return this.http.post<Person>(this.apiUrl, todo);
    }

    public updatePerson(todo: Person): Observable<Person> {
        return this.http.put<Person>(`${this.apiUrl}/${todo._id}`, todo);
    }

    public deletePerson(todo: Person): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/${todo._id}`);
    }

    public showErrorMessage(message: string): void {
        console.log(message);
    }
}