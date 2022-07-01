import React, { FC } from "react";

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
  handlers?: {
    increment?: (event: never) => void;
    decrement?: (event: never) => void;
    deleteCounter?: (event: never) => void;
  };
}

export const Counter: FC<ICounterProps> = ({ value, id, handlers }) => {
  const indicator = id.toString();

  return (
    <CounterWrapper>
      <RemoveButton id={indicator} onClick={handlers?.deleteCounter}>
        -
      </RemoveButton>
      <CounterStyled>
        <CounterButton id={indicator} onClick={handlers?.decrement}>
          -
        </CounterButton>
        <CounterInput value={value} disabled />
        <CounterButton id={indicator} onClick={handlers?.increment}>
          +
        </CounterButton>
      </CounterStyled>
    </CounterWrapper>
  );
};
