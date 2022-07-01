import { FC } from "react";

import {
  CounterInput,
  CounterWrapper,
  RemoveButton,
} from "../Counter/Counter.styled";
import { TimerStyled } from "./Timer.styled";

export const Timer: FC = () => {
  return (
    <CounterWrapper>
      <RemoveButton>-</RemoveButton>
      <TimerStyled>
        <CounterInput disabled />
      </TimerStyled>
    </CounterWrapper>
  );
};
