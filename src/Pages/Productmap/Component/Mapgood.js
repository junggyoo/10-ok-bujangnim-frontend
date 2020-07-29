import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Mapgood.scss";

class Mapgood extends Component {
    constructor() {
        super();
        this.state = {
            btnChange: true,
            display: false,
        }
    }

    hadleChangeBtn = (e) => {
        this.setState ({
            btnChange : false
        });
    }

    hoverOverChange = (e) => {
        this.setState({
            display: true
        });
    }

    hoverOutChange = (e) => {
        this.setState({
            display : false
        })
    }


    render() {
        console.log(this.props)
        return(
            <div onMouseOver={this.hoverOverChange} onMouseOut={this.hoverOutChange} className={this.state.display ?
                `hoverState subcategoryProducts `: `nonehoverState subcategoryProducts`}>
                <div className="subcatProductWrapper">
                    <div className="pictureImgLinkControl">
                        <Link className="pictureImgLinkTag" to="">
                            <div className="productPicture">
                                <img className="pictureImg" src={this.props.product.image} alt=""></img>
                            </div>
                        </Link>
                    </div>
                    <div className="productSizePrice">
                        <Link to="" >
                            <h5 className="productSizePriceName">{this.props.product.name}</h5>
                            <div className="productSizePriceInfo">
                                <span>{this.props.product.size}</span>
                                <span className="spanSlash">/</span>
                                <span>{this.props.product.price}</span>
                            </div>
                        </Link>
                    </div>
                    <div className="productDetailLink">
                        {/* <Link  to=""> */}
                            <div className="productDetails">
                                <ul className="productList">
                                    <li className="productDetailsListItem">
                                        <div className="productDetailsTitle">{this.props.product.detail}</div>
                                        <div className="productDetailsContent">{this.props.product.type}</div>
                                    </li>
                                    <li className="productDetailsListItem">
                                        <div className="productDetailsTitle">{this.props.product.feeltitle}</div>
                                        <div className="productDetailsContent">{this.props.product.feel}</div>
                                    </li>
                                </ul>
                            </div>
                            <div className={this.state.display ? 
                                `hoverState productWrapper` : `nonehoverState productWrapper`} >
                                <button className="productCartBtn" type="button">
                                    <div className="btnContent">
                                        <span onClick={this.hadleChangeBtn} className={this.state.btnChange ? "btnLabel" : "noneBtnLabel"}>카트에 추가 — {this.props.product.price}</span>
                                        <span className={this.state.btnChange ? "btnLabelAction" : "nonebtnLabelAction" }>카트에 추가됨</span>
                                        <span className="loadingIndicatorLight"></span>
                                    </div>
                                </button>
                            </div>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        )
    }

}

export default Mapgood;