import React, { useState } from "react";
import axios from "axios";
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

const initialDisabled = true;

const App = () => {
  //set formValues to state
  const [formValues, setFormValues] = useState(initialFormValues);
  //set order to state
  const [order, setOrder] = useState({});
  // disabled submit button state
  const [disabled, setDisabled] = useState(initialDisabled);

  //onChange and onSubmit helper functions
  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      onions: formValues.onions,
      greenpeppers: formValues.greenpeppers,
      special: formValues.special,
    };
    axios
      .post("https://reqres.in/api/users", newOrder)
      .then((res) => {
        setOrder(res.data);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log("ERROR", err);
        debugger;
      });
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
            disabled={disabled}
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
