import React from "react";
import SkinDetail from "./SkinDetail";
import { Link } from "react-router-dom";
import "./SkinSideBar.scss";

class SkinSideBar extends React.Component {
  constructor() {
    super();
    this.state = {
      shownThird: false,
      skinCategory: [],
      categoryKey: 0,
    };
  }

  componentDidMount() {
    this.handleSkinCategoryData();
  }

  handleSkinCategoryData = () => {
    fetch("http://localhost:3000/data/skindata.json")
      .then((res) => res.json())
      .then((res) => {
        if (res.result === "SUCCESS") {
          this.setState({
            skinCategory: res.data.header[0].catalog_info.category_info,
          });
        }
      });
  };

  openThird = (e) => {
    this.setState({ shownThird: true, categoryKey: e.target.id });
  };

  render() {
    const { shownThird, skinCategory, categoryKey } = this.state;
    return (
      <>
        <div className="SkinSideBar">
          <div className="panelList showAll">
            <Link className="panelLink" to="/">
              모두 보기
            </Link>
          </div>
          <ul className="panelList">
            {skinCategory.map((el) => (
              <>
                <li>
                  <Link
                    className="panelLink"
                    to="/"
                    onMouseEnter={this.openThird}
                    id={el.id}
                  >
                    {el.name}
                  </Link>
                  <sup className="itemNum">{el.product.length}</sup>
                </li>
              </>
            ))}
          </ul>
        </div>
        {shownThird && (
          <SkinDetail skinCategory={skinCategory} categoryKey={categoryKey} />
        )}
      </>
    );
  }
}
export default SkinSideBar;
