import { createReducer } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { addAction, isFulfilledAction, isPendingAction } from "./actions";
import { addWithDelayThunk } from "./thunks";

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addAction, (state, action) => {
      state.count += action.payload;
    })
    .addCase(addWithDelayThunk.fulfilled, (state, action) => {
      state.count += action.payload;
    })
    .addMatcher(isPendingAction, (state, action) => {
      state.addWithDelayPending = true;
    })
    .addMatcher(isFulfilledAction, (state, action) => {
      state.addWithDelayPending = false;
    });
});

export default reducer;
