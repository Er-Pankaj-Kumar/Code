import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import App from "./App"
import Binding from "./binding"

const router = () => {
return (  <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="nav navbar-nav">
            <li className="nav-item">
                <NavLink to="/" className="nav-link">JSX</NavLink>
            </li>    
            <li className="nav-item">
                <NavLink to="/databinding" className="nav-link">Data Binding</NavLink>
            </li>
        </ul>  
      </nav>
      <div className="container">
      <Switch classname="container">
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/databinding">
          <Binding />
        </Route>
      </Switch>
    </div>
    </div>
  </Router>)
}
export default router;
