import React from "react";
import Nav from "../../../../Components/Nav/Nav";
import { aesopLogoPath } from "../../../../config";
import "./CitrusFeed.scss";

class CitrusFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      currentScrollY: 0,
      fixedNav: false,
    };
  }

  componentWillMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentScrollY } = this.state;
    if (prevState.currentScrollY !== currentScrollY) {
      if (currentScrollY === 0) {
        this.setState({ fixedNav: false });
      } else {
        if (prevState.currentScrollY < currentScrollY) {
          this.setState({ fixedNav: false });
        } else {
          this.setState({ fixedNav: true });
        }
      }
    }
  }

  handleScroll = () => {
    const currentScrollY = window.scrollY;
    this.setState({ currentScrollY });
  };

  render() {
    return (
      <section className="CitrusFeed">
        <Nav fixedNav={this.state.fixedNav} />
        <div className="logoContainer">
          <svg
            aria-labelledby="ca6be9cd-5480-4526-b1d6-17bb54dbe2b2"
            class="Icon NavLogo-icon"
            role="img"
            viewBox="0 0 489.7 154.3"
          >
            <title id="ca6be9cd-5480-4526-b1d6-17bb54dbe2b2">Aesop logo</title>
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
        </div>
        <div className="contentContainer">
          <p className="contentTitle">갓 짜낸 신선함</p>
          <p className="contentH1">시트러스 멜란지 바디 클렌저 </p>
          <p className="contentBody">
            새롭게 선보이는 바디 클렌저는 기분을 고양시키는
            페티그레인(비터오렌지잎/잔가지오일), 그레이프프루트, 레몬의 블렌드로
            이루어진 상쾌한 샤워 젤로 세정 루틴에 변화를 선사합니다.
          </p>
          <div className="detailLink">
            <div className="detailContent">
              지금 보기
              <svg className="linkIcon" role="img" viewBox="0 0 50 50">
                <g>
                  <path d={aesopLogoPath.arrow}></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CitrusFeed;
