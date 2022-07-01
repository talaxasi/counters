import { FC } from "react";

import { Counter } from "../../Counter/Counter";
import { Timer } from "../../Timer/Timer";
import { CountersPageStyled, CountersWrapper } from "./CountersPage.styled";

export const CountersPage: FC = () => {
  return (
    <CountersPageStyled>
      <CountersWrapper>
        <Counter />
        <Timer />
      </CountersWrapper>
    </CountersPageStyled>
  );
};
