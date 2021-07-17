import React from "react";
import pizzaImg from "../Images/Pizza.jpg";

export default function Home() {
  return (
    <div className="home-wrapper">
      <img src={pizzaImg} alt="Delicious Pizza" className="home-image" />
      <button id="order-pizza" className="pizza-button">
        Want Pizza?
      </button>
    </div>
  );
}
