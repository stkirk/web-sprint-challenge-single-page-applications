import React from "react";

export default function Confirmation(props) {
  const { order } = props;
  const {
    name,
    id,
    size,
    sauce,
    special,
    pepperoni,
    sausage,
    onions,
    greenpeppers,
    bacon,
    linguica,
    garlic,
    mushrooms,
  } = order;

  //logic for sauce
  const yourSauce =
    (sauce === "red" && "classic red sauce") ||
    (sauce === "oil" && "house olive oil") ||
    (sauce === "white" && "white sauce");

  //logic for toppings
  const yourPepperoni = `${pepperoni === true ? "pepperoni, " : ""}`;
  const yourSausage = `${sausage === true ? "sausage, " : ""}`;
  const yourOnions = `${onions === true ? "onions, " : ""}`;
  const yourGreenPeppers = `${greenpeppers === true ? "green peppers, " : ""}`;
  const yourBacon = `${bacon === true ? "bacon, " : ""}`;
  const yourlinguica = `${linguica === true ? "linguica, " : ""}`;
  const yourGarlic = `${garlic === true ? "garlic, " : ""}`;
  const yourMushrooms = `${mushrooms === true ? "mushrooms, " : ""}`;

  return (
    <div className="confirmation-wrapper">
      <h3>
        Order #{id} for {name} is confirmed!
      </h3>
      <div className="order">
        <p>
          You are going to love your {size} pizza with {yourSauce} and{" "}
          {yourPepperoni}
          {yourSausage}
          {yourOnions}
          {yourGreenPeppers}
          {yourBacon}
          {yourlinguica}
          {yourGarlic}
          {yourMushrooms} and don't worry, if you had a special request we'll
          take care of it.
        </p>
        <p>{special}</p>
      </div>
    </div>
  );
}
