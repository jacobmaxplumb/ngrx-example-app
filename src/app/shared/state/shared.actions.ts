import { createAction, props } from "@ngrx/store";

export const setTitle = createAction(
    '[Shared Page Action] Set Title',
    props<{ title: string}>()
);