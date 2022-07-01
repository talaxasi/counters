import { FC } from "react";

import {
  CounterButton,
  CounterInput,
  CounterStyled,
  CounterWrapper,
  RemoveButton,
} from "./Counter.styled";

export const Counter: FC = () => {
  return (
    <CounterWrapper>
      <CounterStyled>
        <CounterButton>-</CounterButton>
        <CounterInput value={2} disabled />
        <CounterButton>+</CounterButton>
      </CounterStyled>
      <RemoveButton>-</RemoveButton>
    </CounterWrapper>
  );
};
