import { FC } from "react";

import { ICounterProps } from "../Counter/Counter";
import {
  CounterInput,
  CounterWrapper,
  RemoveButton,
} from "../Counter/Counter.styled";
import { TimerStyled } from "./Timer.styled";

export const Timer: FC<ICounterProps> = ({ id, value }) => {
  return (
    <CounterWrapper>
      <RemoveButton id={id.toString()}>-</RemoveButton>
      <TimerStyled>
        <CounterInput value={value} disabled />
      </TimerStyled>
    </CounterWrapper>
  );
};
