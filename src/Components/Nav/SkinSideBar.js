import React from "react";
import SkinDetail from "./SkinDetail";
import { Link } from "react-router-dom";
import "./SkinSideBar.scss";

class SkinSideBar extends React.Component {
  constructor() {
    super();
    this.state = {
      shownThird: false,
    };
  }

  openThird = () => {
    this.setState({ shownThird: true });
  };

  render() {
    return (
      <>
        <div className="SkinSideBar">
          <ul className="panelList">
            <li>
              <Link className="panelLink" to="/" onMouseEnter={this.openThird}>
                모두 보기
              </Link>
            </li>
          </ul>
        </div>
        {this.state.shownThird && <SkinDetail />}
      </>
    );
  }
}
export default SkinSideBar;
