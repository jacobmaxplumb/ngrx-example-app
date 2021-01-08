import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { PersonListComponent } from "./components/person-list/person-list.component";
import { personListReducer } from "./state/person-list.reducer";

@NgModule({
    declarations: [PersonListComponent],
    imports: [
        CommonModule,
        FormsModule,
        StoreModule.forFeature('person-list', personListReducer)
    ]
})
export class TodoListModule { }