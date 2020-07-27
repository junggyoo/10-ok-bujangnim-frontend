import React from "react";
import "./Sliderintro.scss";

class Sliderintro extends React.Component {
  render() {
    const { catagoryname, catagorydescription, catagoryallview } = this.props;

    return (
      <div className="Sliderintro">
        <div className="introDescription">
          <button className="descriptionBtn">
            <h2 className="descriptionName">{catagoryname}</h2>
          </button>
          <p className="descriptionInfo">{catagorydescription}</p>
        </div>
        <div className="productAllView">
          <button className="productAllViewBtn">
            <div className="productAllViewBox">
              <span className="productText">{catagoryallview}</span>
              <svg
                aria-labelledby="43703d45-f029-42d7-b9d2-fa44f1382775"
                className="productAllViewIcon"
                role="img"
                viewBox="0 0 50 50"
              >
                <title id="43703d45-f029-42d7-b9d2-fa44f1382775">
                  See all 6 Cleansers
                </title>
                <g>
                  <path d="M30.1,5.3L50,25.1L30.1,45h-6.6l18-17.6H0v-4.8h41.5l-18-17.6h6.6V5.3z"></path>
                </g>
              </svg>
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default Sliderintro;
