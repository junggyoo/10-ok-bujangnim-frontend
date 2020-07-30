import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
// import Productfilternav from "../../Components/Productfilternav";
import Mapcomponent from "./Component/Mapcomponent";
import Footer from "../../Components/Footer/Footer";
import "./Maplist.scss";


class MapList extends Component {
    constructor(props) {
        super(props);
        this.state= {
            products:[]
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/data/testMocup.json")
            .then(res => res.json())
            .then(res => {
                this.setState({ products: res.data.item})
            })
    }

    

    render() {
        return(
            <div className="Productcolumn">
                <Nav />
                {/* <Productfilternav /> */}
                {this.state.products.length>0 && <Mapcomponent products={this.state.products} />}
                <Footer />
            </div>
        );
    }
}

export default MapList;