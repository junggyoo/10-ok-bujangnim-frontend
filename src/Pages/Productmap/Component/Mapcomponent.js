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
        const goods = this.props.goods;
        const categoryInfo= goods.category_info;
        const sales = goods.products;
        const nextpage = goods.next_category;
        return(
            <>
                <section className="Mapcomponent">
                    <Mapcategoryinfo categoryInfo={categoryInfo} />
                    <Mapgoods sales={sales} />    
                </section>
                <Underbar nextpage={nextpage} />
            </>
        )
    }
}

export default Mapcomponent;