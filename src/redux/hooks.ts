import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { IAppDispatch, IRootState } from "./store";

export const useAppDispatch = () => useDispatch<IAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
