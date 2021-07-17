import React from "react";
//import use history for button clickhandler
import { useHistory } from "react-router-dom";
import pizzaImg from "../Images/Pizza.jpg";

export default function Home() {
  //button clickhandler to push /pizza onto url
  const history = useHistory();
  const routeToPizza = () => {
    history.push("/pizza");
  };
  return (
    <div className="home-wrapper">
      <img src={pizzaImg} alt="Delicious Pizza" className="home-image" />
      <button onClick={routeToPizza} id="order-pizza" className="pizza-button">
        Want Pizza?
      </button>
    </div>
  );
}
