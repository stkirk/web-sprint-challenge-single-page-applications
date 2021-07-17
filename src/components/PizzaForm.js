import React from "react";

export default function PizzaForm(props) {
  //Destructure props
  const { formValues, updateForm, submitForm } = props;
  return (
    <div className="pizza-container">
      <h1>Customize your favorite pie!</h1>
      <div className="order-pizza-div">
        <form id="pizza-form">
          {/* name input */}
          <div className="input-div">
            <div className="input-text">
              <h3>Your Name:</h3>
            </div>
            <input
              id="name-input"
              type="text"
              name="name"
              placeholder="Enter your name"
              maxLength="30"
            />
          </div>
          {/* size dropdown */}
          <div className="input-div">
            <div className="input-text">
              <h3>Choice of Size</h3>
            </div>
            <select id="size-dropdown" name="size">
              <option value="">-- select size --</option>
              <option value="small">Small 10"</option>
              <option value="medium">Medium 12"</option>
              <option value="large">Large 16"</option>
            </select>
          </div>
          {/* Toppings checkboxes */}
          <div className="input-div">
            <div className="input-text">
              <h3>Choice of Toppings</h3>
            </div>

            <div className="checkbox-div">
              <input type="checkbox" name="pepperoni" />
              <label>Pepperoni</label>
            </div>

            <div className="checkbox-div">
              <input type="checkbox" name="sausage" />
              <label>Sausage</label>
            </div>

            <div className="checkbox-div">
              <input type="checkbox" name="onions" />
              <label>Onions</label>
            </div>

            <div className="checkbox-div">
              <input type="checkbox" name="greenpeppers" />
              <label>Green Peppers</label>
            </div>
          </div>

          {/* Special Instructions text input */}
          <div className="input-div">
            <div className="input-text">
              <h3>Special Insructions</h3>
            </div>
            <input
              id="special-text"
              type="text"
              name="special"
              placeholder="Anything else? Just ask, you know you want to"
              size="40"
              maxLength="500"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
