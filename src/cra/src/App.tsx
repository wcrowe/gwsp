import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import { CssBaseline, Grid } from "@material-ui/core";

const App = () => (
  <>
    <CssBaseline />
    <Grid container direction="column">
      <BrowserRouter>
        <Grid item>
          <Header />
        </Grid>
        <Grid item container justify="center">
          <Grid item xs={12} sm={8}>
            <Content />
          </Grid>
        </Grid>
      </BrowserRouter>
    </Grid>
  </>
);

export default App;
