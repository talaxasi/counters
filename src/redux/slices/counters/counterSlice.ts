import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum COUNTER_TYPE {
  COUNTER = "COUNTER",
  TIMER = "TIMER",
}

export interface ICounter {
  id: number;
  value: number;
  type: COUNTER_TYPE;
}

export type ICountersState = ICounter[];

export const initialState: ICountersState = [];

const slice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    addCounter: (state, action: PayloadAction<ICounter>) => {
      state.push(action.payload);
    },
    // deleteCounter: (state, action: PayloadAction<number>) => {
    // },
  },
});

export const actions = {
  ...slice.actions,
};
export const reducer = slice.reducer;

export default slice;
