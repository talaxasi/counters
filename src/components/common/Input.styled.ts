import { styled } from "@mui/material";

import { COLOR } from "../../theme";

export const InputStyled = styled("input")(({ theme }) => ({
  background: theme.palette.input.background,
  color: theme.palette.text.primary,
  padding: theme.spacing(1, 2),
  border: `1px solid ${theme.mixins.rateColor(COLOR.INPUT_BORDER)}`,
  transition: theme.transitions.create("all", {
    duration: theme.transitions.duration.standard,
  }),
}));
