import { FC } from "react";

import { CounterButton, CounterInput, CounterStyled } from "./Counter.styled";

export const Counter: FC = () => {
  return (
    <CounterStyled>
      <CounterButton>-</CounterButton>
      <CounterInput disabled />
      <CounterButton>+</CounterButton>
    </CounterStyled>
  );
};
