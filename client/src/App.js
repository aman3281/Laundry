import React from "react";
import { Container } from "@material-ui/core";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/nav_bar/NavBar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import AllRequest from "./components/laundry/AllRequest";
import ChangePassword from "./components/Auth/ChangePassword";
import OpenRecoverPassword from "./components/Auth/OpenRecoverPassword";
import EmailEnter from "./components/Auth/EmailEnter";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <NavBar />
        <br />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/allRequest" exact component={AllRequest} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/changePassword" exact component={ChangePassword} />
          <Route
            path="/recoverPassword/:id/:token"
            exact
            component={OpenRecoverPassword}
          />
          <Route
            path="/openRecoverPassword"
            exact
            component={EmailEnter}
            // component={OpenRecoverPassword}
          />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
