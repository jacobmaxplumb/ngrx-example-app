import { Person } from "./person";
import { PersonListService } from '../shared/services/pserson-list.service'

export interface GetPeopleAction {
    searchString: string;
}

export interface GetPeopleSuccessAction {
    people: Person[];
    searchString: string;
}

export interface GetPeopleFailureAction {
    errorMessage: string;
    personListService: PersonListService
}

export interface UpdatePersonAction {
    person: Person;
}

export interface UpdatePersonSuccessAction {
    person: Person;
}

export interface UpdatePersonFailureAction {
    errorMessage: string;
    personListService: PersonListService
}

export interface AddPersonAction {
    person: Person;
}

export interface AddPersonSuccessAction {
    person: Person;
}

export interface AddPersonFailureAction {
    errorMessage: string;
    personListService: PersonListService
}