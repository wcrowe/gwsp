import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AcUnitRoundedIcon from "@material-ui/icons/AcUnitRounded";
import { makeStyles } from "@material-ui/styles";
import SignupForm from "./SignupForm";
import { Link, Route } from "react-router-dom";
import OnlineApp from "./OnlineApp";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          Volunteer Application
        </Typography>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/OnlineApp">On Line App</Link>
            </li>
            <li>
              <Link to="/SignupForm">Sign on</Link>
            </li>
            {/* <li><Link to='/me'>Profile</Link></li>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/register'>Register</Link></li>
              <li><Link to='/contact'>Contact</Link></li> */}
          </ul>
        </nav>
        <AcUnitRoundedIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
