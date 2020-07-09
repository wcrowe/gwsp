import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import BaseLayout from "./components/BaseLayout";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { lightTheme } from "./components/themes/light";
import Container from "@material-ui/core/Container";

const App = () => (
  <ThemeProvider theme={lightTheme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <Container>
      <CssBaseline />
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    </Container>
  </ThemeProvider>
);

export default App;
