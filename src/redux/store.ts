import { configureStore } from "@reduxjs/toolkit";

import reducer from "./slices/counters/reducer";

export const store = configureStore({ reducer });

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;

export const dispatch = store.dispatch;

export default store;
