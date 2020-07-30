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
        const product = this.props.product;
        return(
            <div onMouseOver={this.hoverOverChange} onMouseOut={this.hoverOutChange} className={this.state.display ?
                `hoverState subcategoryProducts `: `nonehoverState subcategoryProducts`}>
                <div className="subcatProductWrapper">
                    <div className="pictureImgLinkControl">
                        <Link className="pictureImgLinkTag" to="">
                            <div className="productPicture">
                                <img className="pictureImg" src={product.image_url} alt=""></img>
                            </div>
                        </Link>
                    </div>
                    <div className="productSizePrice">
                        <Link className="textdeco" to="" >
                            <h5 className="productSizePriceName">{product.name}</h5>
                            <div className="productSizePriceInfo">
                                <span>{product.size.size}</span>
                                <span className="spanSlash">/</span>
                                <span>{product.size.price}</span>
                            </div>
                        </Link>
                    </div>
                    <div className="productDetailLink">
                        {/* <Link  to=""> */}
                            <div className="productDetails">
                                <ul className="productList">
                                    <li className="productDetailsListItem">
                                        <div className="productDetailsTitle">피부 타입</div>
                                        <div className="productDetailsContent">{product.skin_types.name}</div>
                                    </li>
                                    <li className="productDetailsListItem">
                                        <div className="productDetailsTitle">사용감</div>
                                        <div className="productDetailsContent">{product.usability}</div>
                                    </li>
                                </ul>
                            </div>
                            <div className={this.state.display ? 
                                `hoverState productWrapper` : `nonehoverState productWrapper`} >
                                <button className="productCartBtn" type="button">
                                    <div className="btnContent">
                                        <span onClick={this.hadleChangeBtn} className={this.state.btnChange ? "btnLabel" : "noneBtnLabel"}>카트에 추가 — {product.size.price}</span>
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