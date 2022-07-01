import { ThemeProvider } from "@mui/material";
import React from "react";

import theme from "../theme";
import { MainContainer } from "./App.styled";
import { CountersPage } from "./pages/CountersPage/CountersPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <CountersPage />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
