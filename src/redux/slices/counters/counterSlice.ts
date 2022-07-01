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

export interface ICountersState {
  [id: number]: ICounter;
}

export const initialState: ICountersState = {};

const slice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    addCounter: (state, action: PayloadAction<ICounter>) => {
      const { id } = action.payload;
      state[id] = action.payload;
    },
    deleteCounter: (state, action: PayloadAction<number>) => {
      delete state[action.payload];
    },
    increment: (state, action: PayloadAction<number>) => {
      state[action.payload].value += 1;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state[action.payload].value -= 1;
    },
  },
});

export const actions = {
  ...slice.actions,
};
export const reducer = slice.reducer;

export default slice;
