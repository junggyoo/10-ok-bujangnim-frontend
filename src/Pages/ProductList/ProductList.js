import React from "react";
import Nav from "../../Components/Nav/Nav";
import Productfilternav from "../../Components/Productfilternav";
import Productslider from "./Components/Productslider";
import "./ProductList.scss";

class ProductList extends React.Component {
  state = {
    products: {},
    category: [],
    item: [],
  };

  componentDidMount() {
    fetch("http://10.58.6.25:8080/board/1")
      .then((res) => res.json())
      .then((res) => this.setState({ products: res.data }));
  }

  render() {
    const { products } = this.state;
    return (
      <div className="ProductList">
        <Nav />
        <Productfilternav  />
        <Productslider products={products} />
      </div>
    );
  }
}

export default ProductList;
