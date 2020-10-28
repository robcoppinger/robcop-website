import React from "react";
import ReactGA from "react-ga";
import "./css/base.css";
import "./css/themes.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { env } from "./env";

function App() {
  ReactGA.initialize(env.GoogleAnalyticsId);
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
