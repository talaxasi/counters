import { FC } from "react";

import { Counter } from "../../Counter/Counter";
import { Timer } from "../../Timer/Timer";
import {
  Button,
  CountersPageStyled,
  CountersWrapper,
} from "./CountersPage.styled";

export const CountersPage: FC = () => {
  return (
    <CountersPageStyled>
      <Button>Добавить счетчик</Button>
      <CountersWrapper>
        <Counter />
        <Timer />
      </CountersWrapper>
    </CountersPageStyled>
  );
};
