import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICounter {
  id: number;
  value: number;
}

export interface ICountersState {
  counters: ICounter[];
}

export const initialState: ICountersState = {
  counters: [],
};

const slice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    addCounter: (state, action: PayloadAction<ICounter>) => {
      console.log(state);
      console.log(action.payload);
    },
  },
});

export const actions = {
  ...slice.actions,
};
export const reducer = slice.reducer;

export default slice;
