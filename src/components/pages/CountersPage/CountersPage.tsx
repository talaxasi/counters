import { FC } from "react";

import { COUNTER_TYPE } from "../../../redux/slices/counters/counterSlice";
import { Counter } from "../../Counter/Counter";
import { useCounter } from "../../Counter/hooks/useCounter";
import { Timer } from "../../Timer/Timer";
import {
  Button,
  CountersPageStyled,
  CountersWrapper,
} from "./CountersPage.styled";

export const CountersPage: FC = () => {
  const { counters, addCounter } = useCounter();
  return (
    <CountersPageStyled>
      <Button onClick={addCounter}>Добавить счетчик</Button>
      <CountersWrapper>
        {counters.map(({ id, value, type }) =>
          type === COUNTER_TYPE.COUNTER ? (
            <Counter id={id} value={value} />
          ) : (
            <Timer id={id} value={value} />
          ),
        )}
      </CountersWrapper>
    </CountersPageStyled>
  );
};
