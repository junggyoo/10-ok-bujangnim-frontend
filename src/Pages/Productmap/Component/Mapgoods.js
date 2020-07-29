import React, { Component } from "react";
import Mapgood from "./Mapgood";
// import "./Mapgoods.scss";

class Mapgoods extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                {this.props.products.map(product => {
                    return (
                        <Mapgood product={product} />
                        );
                    })
                }
            </>
        )}
    }


export default Mapgoods;