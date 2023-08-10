import React, { useEffect } from "react";
import { watches } from "../Assets";
import ReactStars from "react-rating-stars-component";
import "./Card.scss";
const Card = ({ product }) => {
  const options = {
    edit: false,
    half: true,
    value: 2.5,
    size: 20,
    readOnly: true,
    precision: 0.5,
  };
  useEffect(() => {
    // console.table(product);
  }, []);
  return (
    <>
      <div class="card">
        <div class="imgBox">
          <img src={watches} alt="name" class="mouse" />
        </div>
        <div class="contentBox">
          <h3>watch</h3>
          <div>
            <ReactStars {...options} />{" "}
          </div>
          <h2 class="price">
            61.<small>98</small> $
          </h2>
          <a href="/" class="buy">
            Buy Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
