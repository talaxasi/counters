import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  actions,
  COUNTER_TYPE,
} from "../../../redux/slices/counters/counterSlice";

export const useCounter = () => {
  const dispatch = useAppDispatch();
  const counters = useAppSelector((state) => state.counters);
  console.log(counters);

  const addCounter = useCallback(() => {
    if (!counters.length) {
      dispatch(
        actions.addCounter({ id: 1, value: 0, type: COUNTER_TYPE.COUNTER }),
      );
      return;
    }
    const { id, value } = counters.reduce(
      (prev, counter, index) => {
        prev.value += counter.value;
        if (index === counters.length - 1) {
          prev.id = counter.id + 1;
        }
        return prev;
      },
      { id: 0, value: 0 } as { id: number; value: number },
    );
    const type =
      (counters.length + 1) % 4 === 0
        ? COUNTER_TYPE.TIMER
        : COUNTER_TYPE.COUNTER;
    dispatch(actions.addCounter({ id, value, type }));
  }, [counters, dispatch]);

  return {
    addCounter,
    counters,
  };
};
