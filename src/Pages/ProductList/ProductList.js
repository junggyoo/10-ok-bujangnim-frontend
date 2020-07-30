import React from "react";
import Nav from "../../Components/Nav/Nav";
import Productfilternav from "../../Components/Productfilternav";
import Productslider from "./Components/Productslider";
import { productListMockUpData } from "../../config";
import "./ProductList.scss";

class ProductList extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch(`${productListMockUpData}`)
      .then((res) => res.json())
      .then((res) => this.setState({ products: res.data }));
  }

  render() {
    const { products } = this.state;

    return (
      <div className="ProductList">
        <Nav />
        <Productfilternav products={products} />
        <Productslider products={products} />
      </div>
    );
  }
}

export default ProductList;
