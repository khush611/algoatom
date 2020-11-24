import React from "react";
import "./NavBar.css";
import Login from "./Login";
import Contact from "./Contact";
import Analytics from "./Analytics";
import { Link, Switch, Route } from "react-router-dom";
export default function NavBar() {
  return (

    <div className="NavBar">
    <div className="topnav">
    <div className="rightnav">
      <Link to="/contact">Contact</Link>
      <Link to="/analytics">Analytics</Link>
      <Link to="/#"><img className="image" style={{height:"20px",width:"20px"}} src="https://www.flaticon.com/svg/static/icons/svg/2089/2089702.svg" alt="pic"/></Link>
    </div>
    </div>
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
