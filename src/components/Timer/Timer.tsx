import { FC, useEffect } from "react";

import { useAppDispatch } from "../../redux/hooks";
import { actions } from "../../redux/slices/counters/counterSlice";
import { ICounterProps } from "../Counter/Counter";
import {
  CounterInput,
  CounterWrapper,
  RemoveButton,
} from "../Counter/Counter.styled";
import { TimerStyled } from "./Timer.styled";

export const Timer: FC<ICounterProps> = ({ value, id, handlers }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(actions.increment(id));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [dispatch, id]);

  return (
    <CounterWrapper>
      <RemoveButton id={id.toString()} onClick={handlers?.deleteCounter}>
        -
      </RemoveButton>
      <TimerStyled>
        <CounterInput value={value} disabled />
      </TimerStyled>
    </CounterWrapper>
  );
};
