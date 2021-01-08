import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PersonListState } from "./person-list.state";

const selectPersonListState = createFeatureSelector<PersonListState>("person-list");

export const selectPeople = createSelector(
    selectPersonListState,
    (state: PersonListState) => state.people
)

export const PersonListSelectors = {
    selectPeople
}