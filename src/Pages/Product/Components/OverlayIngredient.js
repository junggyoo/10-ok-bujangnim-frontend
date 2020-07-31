import React from "react";
import "./OverlayIngredient.scss";

class OverlayIngredient extends React.Component {
  state = {
    isToggleOn: true,
  };

  addViewHanddler = (e) => {
    e.stopPropagation();
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };

  render() {
    const { isToggleOn } = this.state;
    const { ingredient } = this.props;
    const { addViewHanddler } = this;

    return (
      <section
        className={
          isToggleOn === true ? "Oningredient overlay" : "Offingredient overlay"
        }
      >
        <div className="ClickIngredientContainer">
          <button className="closeBtn" onClick={addViewHanddler}>
            <svg
              aria-labelledby="967c9b61-373e-472d-bf79-019e47aecf1e"
              class="closeBtnIcon"
              role="img"
              viewBox="0 0 50 50"
            >
              <title id="967c9b61-373e-472d-bf79-019e47aecf1e">Close</title>
              <g>
                <polygon points="50,5 45,0 25,20 5,0 0,5 20,25 0,45 5,50 25,30 45,50 50,45 30,25"></polygon>
              </g>
            </svg>
          </button>
          <div className="productIngredientWrapper">
            <ul className="content">
              <li className="title">성분</li>
              <li className="info">{ingredient}</li>
              <li className="reference">
                성분 목록은 변경될 수 있습니다. 구매하신 제품에 대한 정확한 성분
                목록은, 사용 전 제품 라벨을 참조하시기 바랍니다.
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default OverlayIngredient;
