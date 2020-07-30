import React from "react";
import { Link } from "react-router-dom";
import "./Product.scss";

class Product extends React.Component {
  render() {
    const { name, clickHandler, size, price, image_url, key, id } = this.props;

    return (
      <div className="Product" key={key} onClick={() => clickHandler(id)}>
        <div className="imgContainer">
          <Link to="/skin/details">
            <img src={image_url} alt="" />
          </Link>
        </div>
        <div className="productInfo">
          <h5 className="name">{name}</h5>
          <div className="sizePrice">
            <span className="size">{size}</span>
            <span className="seperator">/</span>
            <span className="prrce">{price}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
