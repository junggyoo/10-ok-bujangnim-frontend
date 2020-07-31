import React from "react";
import { aesopLogoPath } from "../config";
import * as productList_API from "../config";
import { withRouter } from "react-router-dom";
import "./Productfilternav.scss";

class Productfilternav extends React.Component {
  state = {
    category : []
  };

  clickHandler = (id) => {
    this.props.history.push(`${id}`)
  }

  componentDidMount() {
      fetch(`http://218.152.9.67:8080/board/1/1`)
        .then((res) => res.json())
        .then((res) => this.setState({ category: res.data.category }));
    }

  render() {
    const { category } = this.state;
    const path = aesopLogoPath;
    return (
      <section className="Productfilternav">
        <div className="logoContainer">
          <svg
            aria-labelledby="ca6be9cd-5480-4526-b1d6-17bb54dbe2b2"
            class="Icon NavLogo-icon"
            role="img"
            viewBox="0 0 489.7 154.3"
          >
            <title id="ca6be9cd-5480-4526-b1d6-17bb54dbe2b2">Aesop logo</title>
            <g>
              <path class="NavLogo-icon--path" d={path.a}></path>
              <path class="NavLogo-icon--path" d={path.e}></path>
              <path class="NavLogo-icon--path" d={path.s}></path>
              <path class="NavLogo-icon--path" d={path.o}></path>
              <path class="NavLogo-icon--path" d={path.p}></path>
              <rect
                x="131.8"
                y="13.5"
                class="NavLogo-icon--path"
                width="44.3"
                height="5"
              ></rect>
              <path class="NavLogo-icon--path" d={path.corp}></path>
            </g>
          </svg>
        </div>
        <section className="productListContainer">
          <div className="productTitleContainer">
            <div className="productTitleBox">
              <h1 className="productTitle">스킨</h1>
            </div>
          </div>
          <div className="productFilterContainer">
            <div className="productFilterBox">
              <ul className="productFilterNav">
                <li>
                  <span className="start">모든 스킨</span>
                </li>
                {category &&
                  category.map((el) => {
                    return (
                      <li key={el.id} onClick={() =>this.clickHandler(el.id)}>
                        <span>{el.name}</span>
                      </li>
                    );
                  })}
              </ul>
              <div className="productFilter">
                <button className="filterBtn">
                  <div className="filterBox">
                    <span>필터</span>
                    <svg class="btnIcon" role="img" viewBox="0 0 50 50">
                      <g>
                        <polygon points="25,31.3 4.2,10.5 0.1,14.6 25,39.5 50,14.6 45.9,10.5 "></polygon>
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default withRouter(Productfilternav);
