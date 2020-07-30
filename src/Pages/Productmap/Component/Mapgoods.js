import React, { Component } from "react";
import Mapgood from "./Mapgood";
import "./Mapgoods.scss";

class Mapgoods extends Component {
    constructor() {
        super();
    }

    render() {
    const goods =this.props.goods;
        return (
            <>
                {goods.map(product => {
                    return (
                        <Mapgood product={product} />
                        );
                    })
                }
            </>
        )}
    }


export default Mapgoods;