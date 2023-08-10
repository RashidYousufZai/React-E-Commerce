import React from "react";
import { NavLink } from "react-router-dom";
import "./PopularItems.scss";
import "./Card.scss";
import Card from "./Card";

const PopularItems = () => {
  return (
    <>
      <div className="Polular-Item">
        <h1>Popular Items</h1>
        <p className="text-center para">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida.
        </p>
      </div>
      <div className="cotainer">
        <div className="row p-items">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="button-more-p">
          <NavLink to="/about">
            <button type="button" class="btn btn-primary text-center">
              View More Products
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default PopularItems;
