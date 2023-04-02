import React from "react";

const Card = ({ title, price }) => {
  return (
    <div className="col-md-4">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
      <h4>{title}</h4>
      <p>{price}</p>
    </div>
  );
};

export default Card;
