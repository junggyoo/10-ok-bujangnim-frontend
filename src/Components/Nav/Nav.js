import React from "react";
import SkinSideBar from "./SkinSideBar";
import Cart from "../../Components/Cart/Cart";
import Login from "../../Pages/Login/Login";
import { Link } from "react-router-dom";
import { aesopLogoPath } from "../../config";
import "./Nav.scss";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      style: { width: 0 },
      shownSecond: false,
      shownCart: false,
      shownLogin: false,
      email: "",
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
  };

  showCart = () => {
    const { shownCart } = this.state;
    this.setState({ shownCart: !shownCart });
  };

  componentDidUpdate(prevProps, prevState) {
    const { shownCart } = this.state;
    if (prevState.shownCart !== shownCart) {
      this.setState({ shownCart: true });
    }
  }

  //로그인시 nav에 email뜨게 하는 함수
  showID = (x) => {
    this.setState({ email: x });
  };

  handleLogin = () => {
    this.setState({ shownLogin: !this.state.shownLogin });
  };

  render() {
    const { shownCart, shownLogin } = this.state;

    return (
      <>
        {shownCart && <Cart />}
        {shownLogin && (
          <Login showID={this.showID} handleLogin={this.handleLogin} />
        )}
        <nav className={this.props.fixedNav ? "NavFixed" : "Nav"}>
          <ul className="navList">
            <div className="navLeft">
              <li>
                <Link onClick={this.openNav}>제품보기</Link>
              </li>
              <li>
                <Link>읽기</Link>
              </li>
              <li>
                <Link>스토어</Link>
              </li>
              <li>
                <Link>검색</Link>
              </li>
            </div>
            <div className="navRight">
              <li>
                <Link onClick={this.handleLogin}>
                  {this.state.email ? this.state.email : "로그인"}
                </Link>
              </li>
              <button className="cartDot" onClick={this.showCart}></button>
            </div>
          </ul>
        </nav>
        <div className="overlay" style={this.state.style}>
          <div className="sideNavTop">
            <ul className="topList">
              <div className="topCategory">
                <li>
                  <Link className="topListLink">제품보기</Link>
                </li>
                <li>
                  <Link className="topListLink">읽기</Link>
                </li>
                <li>
                  <Link className="topListLink">스토어</Link>
                </li>
                <li>
                  <Link className="topListLink">검색</Link>
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
                  to="/skin"
                  onMouseEnter={this.openSecond}
                >
                  스킨
                </Link>
              </li>
              <li>
                <Link className="panelLink">바디&핸드</Link>
              </li>
              <li>
                <Link className="panelLink">향수</Link>
              </li>
              <li>
                <Link className="panelLink">홈</Link>
              </li>
              <li>
                <Link className="panelLink">키트&여행 제품</Link>
              </li>
              <li>
                <Link className="panelLink">기프트가이드</Link>
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
