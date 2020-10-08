import React from "react";
import "./css/base.css";
import "./css/themes.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./Pages/Home";

function App() {
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
