import { FC } from "react";

import {
  CounterButton,
  CounterInput,
  CounterStyled,
  CounterWrapper,
  RemoveButton,
} from "./Counter.styled";

export interface ICounterProps {
  id: number;
  value: number;
}

export const Counter: FC<ICounterProps> = ({ value, id }) => {
  const indicator = id.toString();
  return (
    <CounterWrapper>
      <RemoveButton id={indicator}>-</RemoveButton>
      <CounterStyled>
        <CounterButton id={indicator}>-</CounterButton>
        <CounterInput value={value} disabled />
        <CounterButton id={indicator}>+</CounterButton>
      </CounterStyled>
    </CounterWrapper>
  );
};
