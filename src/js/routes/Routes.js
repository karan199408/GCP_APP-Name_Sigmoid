// Import Required Libraries
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Import Pages
import PageNotFound from "../screens/PageNotFound/PageNotFound";
import AIDEApp from "../screens/AIDEApp/AIDEApp";

function Routes() {
  return (
    <Switch>
      <Redirect from="/" to="/home" exact />
      <Route path="/home" component={AIDEApp} exact />
      <Route path="/home/:tab" component={AIDEApp} exact />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default Routes;
