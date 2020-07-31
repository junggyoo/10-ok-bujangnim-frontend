import React from "react";
import CartList from "./CartList";
import CartSum from "./CartSum";
import { aesopLogoPath } from "../../config";
import "./Cart.scss";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartShown: true,
      showSelectBox: false,
      selectedQuantity: 0,
      cartData: [],
    };
  }

  //서버에서 카트 정보 받아오기 GET
  componentDidMount() {
    fetch("http://10.58.5.19:8000/cart", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("aesopToken"),
      },
    })
      .then((res) => res.json())
      .then((res) => this.setState({ cartData: res.data }));
  }

  closeCart = () => {
    this.setState({ cartShown: false });
  };

  render() {
    const productId = this.props.productId;
    const { cartShown } = this.state;

    return (
      <>
        {cartShown && (
          <section className="Cart">
            <div className="cartList">
              <div className="cartInfo">
                <div className="cartTitle">카트</div>
                <div className="cartSize">사이즈</div>
                <div className="cartQuantity">수량</div>
                <div class="cartBtn">
                  <button className="btnContainer" onClick={this.closeCart}>
                    <svg class="Icon" role="img" viewBox="0 0 50 50">
                      <g>
                        <polygon points={aesopLogoPath.closeBtn}></polygon>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>

              {this.state.cartData.map((el, idx) => {
                const productName = el.product;
                const productSize = el.size;
                const productPrice = el.price;
                const cartId = idx;
                const sizeId = el.id;

                console.log(cartId, productName, productSize, sizeId);
                return (
                  <>
                    <CartList
                      productName={productName}
                      productSize={productSize}
                      productPrice={productPrice}
                      cartId={cartId}
                      sizeId={sizeId}
                    />
                  </>
                );
              })}
            </div>
            <CartSum />
          </section>
        )}
      </>
    );
  }
}

export default Cart;
