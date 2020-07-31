import React from "react";
import "./CartSum.scss";

class CartSum extends React.Component {
  constructor() {
    super();
    this.state = {
      showSelectBox: false,
      selectedQuantity: 0,
    };
  }

  render() {
    return (
      <div className="cartSummary">
        <span>전 제품 무료 배송 혜택을 즐겨보세요.</span>
        <div className="totalPrice">
          <span>소계(세금 포함)</span>
          <span className="sum">₩ 113,000</span>
        </div>
        <button className="payBtn">결제하기</button>
      </div>
    );
  }
}
export default CartSum;
