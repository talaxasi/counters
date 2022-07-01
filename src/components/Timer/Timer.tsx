import { FC } from "react";

import { CounterInput } from "../Counter/Counter.styled";
import { TimerStyled } from "./Timer.styled";

export const Timer: FC = () => {
  return (
    <TimerStyled>
      <CounterInput disabled />
    </TimerStyled>
  );
};
