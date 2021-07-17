import React from "react";
//imports from react-router-dom
import { Route, Link, NavLink, Switch } from "react-router-dom";

//Component imports
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";

const App = () => {
  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Lambda Eats</h1>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          {/* maybe change Help NavLink later PLACEHOLDER */}
          <NavLink to="/help">Help</NavLink>
        </div>
      </nav>
      {/* Routes for components */}
      <Switch>
        {/* list Routes from most specific to least specific */}

        <Route path="/pizza">
          <PizzaForm />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
