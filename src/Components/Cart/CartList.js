import React from "react";
import { aesopLogoPath } from "../../config";
import "./CartList.scss";

class CartList extends React.Component {
  constructor() {
    super();
    this.state = {
      showSelectBox: false,
      selectedQuantity: 0,
      totalPrice: 0,
    };
  }

  openSelectBox = () => {
    this.setState({ showSelectBox: true });
  };

  closeSelectBox = (count) => {
    // 수량변경시 가격변화
    // const itemPrice = this.props.productPrice;
    // const intPrice = itemPrice.replace("₩", "").replace(",", "");
    // const totalPrice = intPrice * count;

    //서버에 수량변경 전달
    fetch("http://10.58.5.19:8000/cart", {
      method: "POST",
      headers: { Authorization: localStorage.getItem("aesopToken") },
      body: JSON.stringify({
        cart_id: this.props.cartId + 1,
        quantity: count,
        isPlus: "False",
        sizeby_id: this.props.sizeId,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
    //현재 백엔드와 연결하는 중이라 주석제거는 나중에 성공하고 하겠습니다.
    // .then(() => {
    //   if (res.message === "success") {
    //     fetch("http://10.58.5.19:8000/cart", {
    //       headers: { Authorization: localStorage.getItem("aesopToken") },
    //     })
    //       .then((res) => res.json())
    //       .then((res) => console.log(res));
    //   }
    // });

    this.setState({
      showSelectBox: false,
      selectedQuantity: count,
      // totalPrice: totalPrice,
    });
  };

  render() {
    const { showSelectBox, selectedQuantity, totalPrice } = this.state;

    return (
      <>
        <div className="cartAdded" id={this.props.cartId}>
          <div className="productName">{this.props.productName}</div>
          <div className="productSize">{this.props.productSize}</div>
          <div className="productCount">
            {selectedQuantity === 0 && (
              <ul
                className={showSelectBox ? "selectClicked" : "selectQuantity "}
                id={this.props.cartId}
              >
                <li onClick={() => this.closeSelectBox(0)}>
                  1
                  <svg
                    role="img"
                    viewBox="0 0 50 50"
                    onClick={this.openSelectBox}
                  >
                    <g>
                      <polygon points={aesopLogoPath.slideArrow}></polygon>
                    </g>
                  </svg>
                </li>
                <li onClick={() => this.closeSelectBox(2)}>2</li>
                <li onClick={() => this.closeSelectBox(3)}>3</li>
                <li onClick={() => this.closeSelectBox(4)}>4</li>
                <li onClick={() => this.closeSelectBox(5)}>5</li>
              </ul>
            )}
            {selectedQuantity !== 0 && (
              <ul
                className={showSelectBox ? "selectClicked" : "selectQuantity "}
                id={this.props.cartId}
              >
                <li className="setValue">
                  {selectedQuantity}
                  <svg
                    role="img"
                    viewBox="0 0 50 50"
                    onClick={this.openSelectBox}
                  >
                    <g>
                      <polygon points={aesopLogoPath.slideArrow}></polygon>
                    </g>
                  </svg>
                </li>
                <div className="numList">
                  <li id="1" onClick={() => this.closeSelectBox(1)}>
                    1
                  </li>
                  <li id="2" onClick={() => this.closeSelectBox(2)}>
                    2
                  </li>
                  <li id="3" onClick={() => this.closeSelectBox(3)}>
                    3
                  </li>
                  <li id="4" onClick={() => this.closeSelectBox(4)}>
                    4
                  </li>
                  <li id="5" onClick={() => this.closeSelectBox(5)}>
                    5
                  </li>
                </div>
              </ul>
            )}
          </div>

          <div class="productPrice">{totalPrice}</div>
        </div>
      </>
    );
  }
}

export default CartList;
