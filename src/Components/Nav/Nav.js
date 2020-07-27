import React from "react";
import SkinSideBar from "./SkinSideBar";
import { Link } from "react-router-dom";
import { aesopLogoPath } from "../../config";

import "./Nav.scss";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      style: { width: 0 },
      shownSecond: false,
    };
  }

  openNav = () => {
    this.setState({ style: { width: "calc(100% * 1 / 3)" } });
  };

  closeNav = () => {
    document.removeEventListener("click", this.closeNav);
    this.setState({ style: { width: 0 }, shownSecond: false });
  };

  openSecond = () => {
    this.setState({ shownSecond: true });
    console.log(this.state.shownSecond);
  };

  render() {
    return (
      <>
        <nav className={this.props.fixedNav ? "Nav Fixed" : "Nav"}>
          <ul className="navList">
            <div className="navLeft">
              <li>
                <Link to="/" onClick={this.openNav}>
                  제품보기
                </Link>
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
        <div className="overlay" style={this.state.style}>
          <div className="sideNavTop">
            <ul className="topList">
              <div className="topCategory">
                <li>
                  <Link className="topListLink" to="/">
                    제품보기
                  </Link>
                </li>
                <li>
                  <Link className="topListLink" to="/">
                    읽기
                  </Link>
                </li>
                <li>
                  <Link className="topListLink" to="/">
                    스토어
                  </Link>
                </li>
                <li>
                  <Link className="topListLink" to="/">
                    검색
                  </Link>
                </li>
              </div>
              <div className="btnContainer">
                <img
                  className="closeBtn"
                  type="button"
                  onClick={this.closeNav}
                  alt="xbtn"
                  src="https://img.icons8.com/ios-glyphs/52/000000/delete-sign.png"
                />
              </div>
            </ul>
          </div>
          <div className="sideCategory">
            <svg
              aria-labelledby="ca6be9cd-5480-4526-b1d6-17bb54dbe2b2"
              class="Icon NavLogo-icon"
              role="img"
              viewBox="0 0 489.7 154.3"
            >
              <title id="ca6be9cd-5480-4526-b1d6-17bb54dbe2b2">
                Aesop logo
              </title>
              <g>
                <path class="NavLogo-icon--path" d={aesopLogoPath.a}></path>
                <path class="NavLogo-icon--path" d={aesopLogoPath.e}></path>
                <path class="NavLogo-icon--path" d={aesopLogoPath.s}></path>
                <path class="NavLogo-icon--path" d={aesopLogoPath.o}></path>
                <path class="NavLogo-icon--path" d={aesopLogoPath.p}></path>
                <rect
                  x="131.8"
                  y="13.5"
                  class="NavLogo-icon--path"
                  width="44.3"
                  height="5"
                ></rect>
                <path class="NavLogo-icon--path" d={aesopLogoPath.corp}></path>
              </g>
            </svg>
            <ul className="panelList">
              <li>
                <Link
                  className="panelLink"
                  to="/"
                  onMouseEnter={this.openSecond}
                >
                  스킨
                </Link>
              </li>
              <li>
                <Link className="panelLink" to="/">
                  바디&핸드
                </Link>
              </li>
              <li>
                <Link className="panelLink" to="/">
                  향수
                </Link>
              </li>
              <li>
                <Link className="panelLink" to="/">
                  홈
                </Link>
              </li>
              <li>
                <Link className="panelLink" to="/">
                  키트&여행 제품
                </Link>
              </li>
              <li>
                <Link className="panelLink" to="/">
                  기프트가이드
                </Link>
              </li>
            </ul>
            <div className="orderHistory">최근 주문 내역</div>
          </div>
        </div>
        {this.state.shownSecond && <SkinSideBar />}
      </>
    );
  }
}

export default Nav;
