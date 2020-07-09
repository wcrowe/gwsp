import React from "react";
import { Link, Route } from "react-router-dom";
import { OnlineApp } from "./OnlineApp";
import HomePage from "./Pages";
import Signup from "./SignupForm"
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { lightTheme } from "./themes/light";
import Container from "@material-ui/core/Container";
import SignupForm from "./SignupForm";

const BaseLayout = () => (
  <div className="base">
    <header>
      <p>React Router v5 Browser Example</p>
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
    </header>
    <div className="container">
      <Route path="/" exact component={HomePage}/>
      <Route path="/OnlineApp" component={OnlineApp}/>
      <Route path="/SignupForm" component={SignupForm}/>
    </div>
  </div>
);

export default BaseLayout;
