// Import Required Libraries
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Import Pages
import Login from "../screens/Login/Login";
import Unauthorized from "../screens/Unauthorized/Unauthorized";
import PageNotFound from "../screens/PageNotFound/PageNotFound";
import AIDEApp from "../screens/AIDEApp/AIDEApp";

// Import Custom Components
import ProtectedRoute from "./ProtectedRoute";

function Routes() {
  return (
    <Switch>
      <Redirect from="/" to="/home" exact />
      <ProtectedRoute path="/home" component={AIDEApp} exact />
      <ProtectedRoute path="/home/:tab" component={AIDEApp} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/unauthorized" component={Unauthorized} exact />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default Routes;
