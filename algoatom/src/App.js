import React from "react";
import "./index.css";
import Login from "./Login";
import Contact from "./Contact";
import Analytics from "./Analytics";
import { Link, Switch, Route } from "react-router-dom";
export default function App() {
  return (

    <div className="App">

      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/analytics">
          <Analytics />
        </Route>
      </Switch>
    </div>
  );
}
