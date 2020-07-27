import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

class Nav extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <ul className="navList">
          <div className="navLeft">
            <li>
              <Link to="/">제품보기</Link>
            </li>
            <li>
              <Link to="/">읽기</Link>
            </li>
            <li>
              <Link to="/">스토어</Link>
            </li>
            <li>
              <Link to="/">검색</Link>
            </li>
          </div>
          <div className="navRight">
            <li>
              <Link to="/">로그인</Link>
            </li>
            <button className="cartDot"></button>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Nav;
