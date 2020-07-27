import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Mapgoods.scss";


class Mapgoods extends Component {
    constructor() {
        super();
        this.state = {
            products : [],
            btnChange: true
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/data/mocup.json")
            .then(res => res.json())
            .then(res => {
                this.setState({products : res.products})
            })
    }

    hadleChangeBtn = (e) => {
        e.preventDefault();
        this.setState ({
            btnChange : false
        });
        console.log(this.setState)
    }

    render() {
        return (
            <>
            {this.state.products.map(el => (
                <div className="subcategoryProducts">
                    <div className="subcatProductWrapper">
                        <div className="pictureImgLinkControl">
                            <Link className="pictureImgLinkTag" to="">
                                <div className="productPicture">
                                    <img className="pictureImg" src={el.image} alt=""></img>
                                </div>
                            </Link>
                        </div>
                        <div className="productSizePrice">
                            <Link to="" >
                                <h5 className="productSizePriceName">{el.name}</h5>
                                <div className="productSizePriceInfo">
                                    <span>{el.size}</span>
                                    <span className="spanSlash">/</span>
                                    <span>{el.price}</span>
                                </div>
                            </Link>
                        </div>
                        <div className="productDetailLink">
                            {/* <Link  to=""> */}
                                <div className="productDetails">
                                    <ul className="productList">
                                        <li className="productDetailsListItem">
                                            <div className="productDetailsTitle">{el.detail}</div>
                                            <div className="productDetailsContent">{el.type}</div>
                                        </li>
                                        <li className="productDetailsListItem">
                                            <div className="productDetailsTitle">{el.feeltitle}</div>
                                            <div className="productDetailsContent">{el.feel}</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="productWrapper">
                                    <button className="Btn" type="button">
                                        <div className="btnContent">
                                            <span onClick={this.hadleChangeBtn} className={this.state.btnChange ? "btnLabel" : "noneBtnLabel"}>카트에 추가 — {el.price}</span>
                                            <span className={this.state.btnChange ? "btnLabelAction" : "nonebtnLabelAction" }>카트에 추가됨</span>
                                            <span className="loadingIndicatorLight"></span>
                                        </div>
                                    </button>
                                </div>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            ))}
        </>
        )}
    }


export default Mapgoods;