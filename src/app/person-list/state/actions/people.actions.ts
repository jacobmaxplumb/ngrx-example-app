import { createAction, props } from "@ngrx/store";
import { Person } from "src/app/models/person";
import { PersonListService } from '../../../shared/services/pserson-list.service'

export const getPeople = createAction(
    '[People Page Actions] Get People',
    props<{ searchString: string }>()
);

export const getPeopleSuccess = createAction(
    '[People API Actions] Get People Success',
    props<{ people: Person[], searchString: string }>()
)

export const getPeopleFailure = createAction(
    '[People API Actions] Get People Failure',
    props<{ errorMessage: string, personListService: PersonListService }>()
)