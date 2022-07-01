import { ButtonBase, styled } from "@mui/material";

import { COLOR } from "../../theme";

export const ButtonStyled = styled(ButtonBase)(({ theme }) => ({
  color: theme.palette.button.color,
  background: theme.palette.button.backgroundLight,
  boxShadow: theme.mixins.button.boxShadow,
  padding: theme.spacing(1, 2),
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.spacing(2.5),
  border: `1px solid ${theme.mixins.rateColor(COLOR.TRANSPARENT)}`,
  transition: theme.transitions.create("all", {
    duration: theme.transitions.duration.complex,
  }),
  "&:hover": {
    background: theme.palette.button.hover,
    color: theme.palette.text.primary,
    boxShadow: "1px 3px 11px -5px rgba(34, 60, 80, 0.2)",
    borderColor: theme.mixins.rateColor(COLOR.BUTTON_BORDER),
  },
  "&:active": {
    boxShadow: "none",
  },
}));
