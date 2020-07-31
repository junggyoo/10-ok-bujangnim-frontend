import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
import Productfilternav from "../../Components/Productfilternav";
import Mapcomponent from "./Component/Mapcomponent";
import Footer from "../../Components/Footer/Footer";
import { withRouter } from "react-router-dom";
import "./Maplist.scss";


class MapList extends Component {
    constructor(props) {
        super(props);
        this.state= {
            goods:[]
        };
    }

    componentDidMount() {
        fetch(`http://218.152.9.67:8080/board/1/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(res => {
                this.setState({ goods: res.data.items})
            })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            console.log(this.props)
        fetch(`http://218.152.9.67:8080/board/1/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(res => {this.setState({ goods: res.data.items})
            })
        }}

    render() {
        return(
            <div className="Productcolumn">
                {this.state.goods.map(product => {
                    return ( 
                        <>
                            <Nav />
                            <Productfilternav />
                            {this.state.goods.length> 0 && <Mapcomponent goods={product} />}
                            <Footer />
                        </>
                    );
                    })}
            </div>  
        );
    }
}

export default withRouter(MapList);