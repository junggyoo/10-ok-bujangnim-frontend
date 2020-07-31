import React from "react";
import "./CartMessage.scss";

class CartMessage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section className="CartMessage">
        <div className="message">카트에 추가되었습니다</div>
      </section>
    );
  }
}
export default CartMessage;
