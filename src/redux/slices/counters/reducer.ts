import { combineReducers } from "@reduxjs/toolkit";

import counterSlice, { ICountersState } from "./counterSlice";

export interface ICountersReducer {
  counters: ICountersState;
}

const reducer = combineReducers<ICountersReducer>({
  counters: counterSlice.reducer,
});

export default reducer;
