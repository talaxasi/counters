import { styled } from "@mui/material";

export const CountersPageStyled = styled("div")(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const CountersWrapper = styled("div")(({ theme }) => ({
  width: theme.spacing(45),
  height: "90vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflowY: "hidden",
  boxShadow: theme.mixins.wrapper.bottomShadow,
  gap: theme.spacing(),
}));
