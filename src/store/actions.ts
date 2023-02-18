import { createAction, AnyAction, AsyncThunk } from "@reduxjs/toolkit";

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type PendingAction = ReturnType<GenericAsyncThunk["pending"]>;
type FulfilledAction = ReturnType<GenericAsyncThunk["fulfilled"]>;

export const addAction = createAction<number, "ADD">("ADD");
export const isPendingAction = (action: AnyAction): action is PendingAction => {
  return action.type.endsWith("/pending");
};
export const isFulfilledAction = (
  action: AnyAction
): action is FulfilledAction => {
  return action.type.endsWith("/fulfilled");
};
