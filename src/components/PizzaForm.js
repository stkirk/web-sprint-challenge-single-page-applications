import React from "react";

export default function PizzaForm(props) {
  //Destructure props
  const { formValues, updateForm, submitForm, disabled, formErrors } = props;

  //onChange handler
  const onChange = (evt) => {
    //destructure synthetic evt
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    updateForm(name, valueToUse);
  };

  //onSubmit handler
  const onSubmit = (evt) => {
    evt.preventDefault();
    submitForm();
  };

  return (
    <div className="pizza-container">
      <h1>Customize your favorite pie!</h1>
      <div className="order-pizza-div">
        <form id="pizza-form" onSubmit={onSubmit} data-cy="form">
          {/* name input */}
          <div className="input-div">
            <div className="input-text">
              <h3>Your Name:</h3>
              <div className="errors-div">{formErrors.name}</div>
            </div>
            <input
              data-cy="nameInput"
              onChange={onChange}
              id="name-input"
              type="text"
              name="name"
              value={formValues.name}
              placeholder="Enter your name"
              maxLength="30"
            />
          </div>
          {/* size dropdown */}
          <div className="input-div">
            <div className="input-text">
              <h3>Choice of Size</h3>
              <div className="errors-div">{formErrors.size}</div>
            </div>
            <select
              data-cy="sizeSelect"
              id="size-dropdown"
              name="size"
              value={formValues.size}
              onChange={onChange}
            >
              <option value="">-- select size --</option>
              <option data-cy="small" value="small">
                Small 10"
              </option>
              <option data-cy="medium" value="medium">
                Medium 12"
              </option>
              <option data-cy="large" value="large">
                Large 16"
              </option>
            </select>
          </div>
          {/* Toppings checkboxes */}
          <div className="input-div">
            <div className="input-text">
              <h3>Choice of Toppings</h3>
            </div>

            <div className="checkbox-div">
              <input
                data-cy="pepperoniCheckbox"
                type="checkbox"
                name="pepperoni"
                checked={formValues.pepperoni}
                onChange={onChange}
              />
              <label>Pepperoni</label>
            </div>

            <div className="checkbox-div">
              <input
                data-cy="sausageCheckbox"
                type="checkbox"
                name="sausage"
                checked={formValues.sausage}
                onChange={onChange}
              />
              <label>Sausage</label>
            </div>

            <div className="checkbox-div">
              <input
                data-cy="onionsCheckbox"
                type="checkbox"
                name="onions"
                checked={formValues.onions}
                onChange={onChange}
              />
              <label>Onions</label>
            </div>

            <div className="checkbox-div">
              <input
                data-cy="greenpeppersCheckbox"
                type="checkbox"
                name="greenpeppers"
                checked={formValues.greenpeppers}
                onChange={onChange}
              />
              <label>Green Peppers</label>
            </div>
          </div>

          {/* Special Instructions text input */}
          <div className="input-div">
            <div className="input-text">
              <h3>Special Insructions</h3>
            </div>
            <input
              data-cy="specialInput"
              onChange={onChange}
              id="special-text"
              type="text"
              name="special"
              value={formValues.special}
              placeholder="Anything else? Just ask, you know you want to"
              size="40"
              maxLength="500"
            />
          </div>

          {/* order-button */}
          <div className="input-div">
            <button
              id="order-button"
              disabled={disabled}
              className="pizza-button"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
