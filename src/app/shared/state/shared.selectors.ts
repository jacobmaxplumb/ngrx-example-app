import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SharedState } from "./shared.state";

const selectTitleState = createFeatureSelector<SharedState>("shared");

const selectTitle = createSelector(
    selectTitleState,
    (state: SharedState) => state.title
);

export const SharedStateSelectors = {
    selectTitle,
};