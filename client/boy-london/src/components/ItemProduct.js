import React from "react";
import "./css/itemProduct.css";

const ItemProduct = (props) => {
  const { image, name, price } = props;

  return (
    <div className="productView">
      <div className="imageBox">
        <img className="image" src={image} />
      </div>
      <div className="nameBox">
        <p className="nameProduct">{name}</p>
        <p className="priceText">{price}</p>
      </div>
    </div>
  );
};

export default ItemProduct;
