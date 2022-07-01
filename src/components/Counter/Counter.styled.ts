import { styled } from "@mui/material";

import { COLOR } from "../../theme";
import { ButtonStyled } from "../common/Button.styled";
import { InputStyled } from "../common/Input.styled";

export const CounterWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  gap: theme.spacing(0.5),
  minHeight: theme.spacing(10),
  width: theme.spacing(40),
  padding: theme.spacing(0.5),
  borderRadius: theme.spacing(4),
  border: `1px solid ${theme.mixins.rateColor(COLOR.INPUT_BORDER)}`,
  color: theme.palette.text.primary,
  overflow: "hidden",
}));

export const CounterStyled = styled("div")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const CounterButton = styled(ButtonStyled)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
  borderRadius: "50%",
  fontSize: theme.spacing(4),
  fontWeight: theme.typography.fontWeightRegular,
}));

export const CounterInput = styled(InputStyled)(({ theme }) => ({
  width: theme.spacing(23),
  height: theme.spacing(7),
  borderRadius: theme.spacing(3),
  fontSize: theme.spacing(4),
  fontWeight: theme.typography.fontWeightRegular,
}));

export const RemoveButton = styled(ButtonStyled)(({ theme }) => ({
  width: "110%",
  height: theme.spacing(2),
  backgroundColor: "transparent",
  boxShadow: "none",
  color: theme.palette.error.main,
  fontSize: theme.spacing(3),
  borderRadius: theme.spacing(),
  marginTop: theme.spacing(-1),
  "&:hover": {
    backgroundColor: theme.palette.error.main,
  },
}));
