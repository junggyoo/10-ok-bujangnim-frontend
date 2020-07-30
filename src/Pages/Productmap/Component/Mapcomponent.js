import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Mapcategoryinfo from "./Mapcategoryinfo";
import Mapgoods from "./Mapgoods";
import Underbar from "./Underbar";
import "./Mapcomponent.scss";

class Mapcomponent extends Component {
    constructor(props) {
        super(props);
    }  

    render() {
        const products = this.props.products;
        const categoryInfo= products[0].category_info;
        const goods = products[0].products;
        return(
            <>
                <section className="Mapcomponent">
                    <Mapcategoryinfo categoryInfo={categoryInfo} />
                    <Mapgoods goods={goods} />    
                </section>
                <Underbar products={products} />
            </>
        )
    }
}

export default Mapcomponent;