import { useCallback, useMemo } from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  actions,
  COUNTER_TYPE,
} from "../../../redux/slices/counters/counterSlice";

export type ButtonHandler = Event & {
  target: HTMLButtonElement;
};

export const useCounter = () => {
  const dispatch = useAppDispatch();
  const countersObj = useAppSelector((state) => state.counters);

  const counters = useMemo(() => Object.values(countersObj), [countersObj]);

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

  const increment = useCallback(
    (event: ButtonHandler) => {
      const id = Number(event.target.id);
      dispatch(actions.increment(id));
    },
    [dispatch],
  );

  const decrement = useCallback(
    (event: ButtonHandler) => {
      const id = Number(event.target.id);
      dispatch(actions.decrement(id));
    },
    [dispatch],
  );

  const deleteCounter = useCallback(
    (event: ButtonHandler) => {
      const id = Number(event.target.id);
      dispatch(actions.deleteCounter(id));
    },
    [dispatch],
  );

  const handlers = {
    increment,
    decrement,
    deleteCounter,
  };

  return {
    addCounter,
    counters,
    handlers,
  };
};
