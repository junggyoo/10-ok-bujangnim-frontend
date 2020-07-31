import React, { Component } from "react";
import Mapgood from "./Mapgood";
import "./Mapgoods.scss";

class Mapgoods extends Component {
    constructor() {
        super();
    }

    render() {
    const sales =this.props.sales;
        return (
            <>
                {sales.map(product => {
                    return (
                        <Mapgood product={product} />
                        );
                    })
                }
            </>
        )}
    }


export default Mapgoods;