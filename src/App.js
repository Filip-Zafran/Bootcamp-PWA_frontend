import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./screen/Landing";
import Cities from "./components/Cities";
import Login from "./components/LogIn";
import Signup from "./components/SignUp";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/cities" component={Cities} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Signup" component={Signup} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
