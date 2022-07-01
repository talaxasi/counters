import { styled } from "@mui/material";

import { COLOR } from "../../theme";
import { ButtonStyled } from "../common/Button.styled";
import { InputStyled } from "../common/Input.styled";

export const CounterStyled = styled("div")(({ theme }) => ({
  width: theme.spacing(37),
  height: theme.spacing(8),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(0.5),
  borderRadius: theme.spacing(4),
  color: theme.palette.text.primary,
  border: `1px solid ${theme.mixins.rateColor(COLOR.INPUT_BORDER)}`,
}));

export const CounterButton = styled(ButtonStyled)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
  borderRadius: "50%",
  fontSize: theme.spacing(4),
  fontWeight: theme.typography.fontWeightRegular,
}));

export const CounterInput = styled(InputStyled)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
  borderRadius: "50%",
}));