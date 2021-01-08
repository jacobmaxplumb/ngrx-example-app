import { createReducer, on } from "@ngrx/store";
import { Person } from "src/app/models/person";
import { GetPeopleFailureAction, GetPeopleSuccessAction } from "src/app/models/person-list-actions";
import * as PeopleActions from "./actions/people.actions";
import { PersonListState } from "./person-list.state";

const initialState: PersonListState = new PersonListState();

export const personListReducer = createReducer(
    initialState,
    on(
        PeopleActions.getPeopleSuccess,
        (state: PersonListState, action: GetPeopleSuccessAction): PersonListState => {
            return new PersonListState({
                ...state,
                people: action.people.filter((person: Person) => person.firstName.includes(action.searchString) || person.lastName.includes(action.searchString))
            });
        }
    ),
    on(
        PeopleActions.getPeopleFailure,
        (state: PersonListState, action: GetPeopleFailureAction): PersonListState => {
            return new PersonListState({
                ...state
            });
        }
    )
)