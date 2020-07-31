import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
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
        setTimeout(() => {
            this.setState({
                btnChange:true
            })
        }, 700); 
    } 
    

    hoverOverChange = (e) => {
        this.setState({
            display: true
        })
    }

    hoverOutChange = (e) => {
        this.setState({
            display : false
        })
    }


    render() {
        const product = this.props.product;
        console.log(this.props)
        return(
            <div onMouseOver={this.hoverOverChange} onMouseOut={this.hoverOutChange} className={this.state.display ?
                `hoverState subcategoryProducts `: `nonehoverState subcategoryProducts`}>
                <div className="subcatProductWrapper">
                    <div className="pictureImgLinkControl">
                        <Link className="pictureImgLinkTag" to="">
                        {/* <Link className="pictureImgLinkTag" to={product.history.push(`/Maplist/${Mapgood.id}`)}> */}
                            <div className="productPicture">
                                <img className="pictureImg" src={product.image_url} alt=""></img>
                            </div>
                        </Link>
                    </div>
                    <div className="productSizePrice">
                        <Link className="textdeco" to="" >
                            <h5 className="productSizePriceName">{product.name}</h5>
                            <div className="productSizePriceInfo">
                                    <span>{product.size[0].size}</span>
                                    <span className="spanSlash">/</span>
                                    <span>{product.size[0].price}</span>
                            </div>
                        </Link>
                    </div>
                    <div className="productDetailLink">
                        <Link  to="">
                            <div className="productDetails">
                                <ul className="productList">
                                    <li className="productDetailsListItem">
                                        <div className="productDetailsTitle">피부 타입</div>
                                        <div className="productDetailsContent">
                                            {product.skin_types.map((el) => {
                                                const num = product.skin_types.length - 1;
                                                const lastEl = product.skin_types[num];
                                                    if (el === lastEl) {
                                                        return `${el.name}`;
                                                    } else {
                                                        return `${el.name}, `;
                                                    }
                                            })}
                                        </div>
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
                                        <div onClick={this.hadleChangeBtn} className={this.state.btnChange ? "btnLabel" : "noneBtnLabel"}>
                                            카트에 추가 — {product.size[0].price}
                                        </div>
                                        <span className={this.state.btnChange ? "btnLabelAction" : "nonebtnLabelAction" }>카트에 추가됨</span>
                                    </div>
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default Mapgood;