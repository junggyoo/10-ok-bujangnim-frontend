import React from "react";
import { Link } from "react-router-dom";
import "./SkinDetail.scss";

class SkinDetail extends React.Component {
  render() {
    const { skinCategory, categoryKey } = this.props;
    const matchingIdx = Number(categoryKey) - 1;

    return (
      <div className="SkinDetail">
        <div className="panelList showAll">
          <Link className="panelLink" to="/">
            {skinCategory[matchingIdx].name} 모두 보기
          </Link>
          {skinCategory[matchingIdx].product.map((el) => (
            <ul className="productInfo" id={el.id}>
              <Link className="productLink" to="/">
                <li>
                  <div className="infoDesc">
                    <span className="panelLink infoName">{el.name}</span>
                    {el.size.length > 1 ? (
                      <span>2 사이즈 / {el.size[0].price} 부터 </span>
                    ) : (
                      <span>
                        {el.size[0].size} / {el.size[0].price}
                      </span>
                    )}
                  </div>
                  <div className="infoImgContainer">
                    <img className="infoImg" alt="product" src={el.image_url} />
                  </div>
                </li>
              </Link>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}
export default SkinDetail;
