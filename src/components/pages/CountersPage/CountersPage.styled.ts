import { styled } from "@mui/material";

import theme, { COLOR } from "../../../theme";
import { ButtonStyled } from "../../common/Button.styled";

export const CountersPageStyled = styled("div")(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const CountersWrapper = styled("div")(({ theme }) => ({
  width: theme.spacing(45),
  height: "70vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflowY: "hidden",
  boxShadow: theme.mixins.wrapper.bottomShadow,
  gap: theme.spacing(),
}));

export const Button = styled(ButtonStyled)(({ theme }) => ({
  width: theme.spacing(40),
  height: theme.spacing(8),
  border: `1px solid ${theme.mixins.rateColor(COLOR.BUTTON_BORDER)}`,
  borderRadius: theme.spacing(13),
  backgroundColor: theme.palette.success.light,
  color: theme.palette.text.secondary,
}));
