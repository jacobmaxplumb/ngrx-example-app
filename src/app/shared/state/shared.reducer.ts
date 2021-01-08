import { createReducer, on } from "@ngrx/store";
import { SetTitleAction } from "src/app/models/app.models";
import { setTitle } from "./shared.actions";
import { SharedState } from "./shared.state";

export const initialState: SharedState = new SharedState();

export const sharedReducer = createReducer(
    initialState,
    on(setTitle, (state: SharedState, action: SetTitleAction): SharedState => {
        return new SharedState({
            ...state,
            title: action.title
        });
    }),
)