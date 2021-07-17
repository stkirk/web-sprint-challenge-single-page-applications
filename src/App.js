import React, { useState } from "react";
//imports from react-router-dom
import { Route, NavLink, Switch } from "react-router-dom";

//Component imports
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";

//Initial state values for Form
const initialFormValues = {
  name: "",
  size: "",
  pepperoni: false,
  sausage: false,
  onions: false,
  greenpeppers: false,
  special: "",
};

const App = () => {
  //set formValues to state
  const [formValues, setFormValues] = useState(initialFormValues);

  //onChange and onSubmit helper functions
  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    debugger;
  };

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
          <PizzaForm
            formValues={formValues}
            updateForm={updateForm}
            submitForm={submitForm}
          />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
