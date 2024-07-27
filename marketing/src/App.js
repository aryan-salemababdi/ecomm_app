import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import { StylesProvider } from "@material-ui/core";

import Pricing from "./components/Pricing/Pricing";
import Album from "./components/Landing/Landing";

export default () => {
  return (
    <>
      <StylesProvider>
        <Router>
          <Switch>
            <Route exact path={"/pricing"} component={Pricing} />
            <Route exact path={"/"} component={Album} />
          </Switch>
        </Router>
      </StylesProvider>
    </>
  );
};