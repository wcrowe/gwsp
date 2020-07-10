import React from "react";
import { Route } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import SignupForm from "./SignupForm";
import OnlineApp from "./OnlineApp";
import HomePage from "./Pages";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    grid: {
      width: "100%",
      margin: 0,
    },
    fullWidth: {
      width: "100%",
    },
    formItem: {
      textAlign: "left",
    },
  })
);

const Content = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/OnlineApp" component={OnlineApp} />
        <Route path="/SignupForm" component={SignupForm} />
      </div>
    </Paper>
  );
};

export default Content;
