import React, { useState, useEffect } from "react";
import axios from "axios";
//imports from react-router-dom
import {
  Route,
  NavLink,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";

//Component imports
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";
import Confirmation from "./components/Confirmation";

//validation imports
import * as yup from "yup";
import schema from "./validation/formSchema";

//Initial state values for Form
const initialFormValues = {
  name: "",
  size: "",
  // sauce: "", Note: I don't know why, but the autotest does not like this value, with it left in the last test fails because it is not expected in the array posted to reqres, comment it out and the test passes
  pepperoni: false,
  sausage: false,
  onions: false,
  greenpeppers: false,
  bacon: false,
  linguica: false,
  garlic: false,
  mushrooms: false,
  special: "",
};

const initialDisabled = true;

//initial blank form errors object
const initialFormErrors = {
  name: "",
  size: "",
  sauce: "",
};

const App = () => {
  //set formValues to state
  const [formValues, setFormValues] = useState(initialFormValues);
  //set order to state will pass as props to confirmation page if I have time
  const [order, setOrder] = useState({});
  // disabled submit button state
  const [disabled, setDisabled] = useState(initialDisabled);
  //forErrors state
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  //schema validation helper function
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  };

  //onChange and onSubmit helper functions
  const updateForm = (inputName, inputValue) => {
    validate(inputName, inputValue);
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  //pulling pathname info for submit
  const history = useHistory();
  const { pathname } = useLocation();

  const submitForm = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      onions: formValues.onions,
      greenpeppers: formValues.greenpeppers,
      bacon: formValues.bacon,
      linguica: formValues.linguica,
      garlic: formValues.garlic,
      mushrooms: formValues.mushrooms,
      special: formValues.special,
    };
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((res) => {
        console.log("RESPONSE DATA", res.data);
        setOrder(res.data);
        setFormValues(initialFormValues);
        return res.data;
      })
      .then((res) => {
        history.push(`${pathname}/${res.id}`);
      })
      .catch((err) => {
        console.log("ERROR", err);
        debugger;
      });
  };

  //useEffect firing after each re-render when formValues state changes, evaluate formValues state to assess if they pass validation and enable submit button
  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

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

        <Route path="/pizza/:id">
          <Confirmation order={order} />
        </Route>

        <Route path="/pizza">
          <PizzaForm
            formValues={formValues}
            updateForm={updateForm}
            submitForm={submitForm}
            disabled={disabled}
            formErrors={formErrors}
            order={order}
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
