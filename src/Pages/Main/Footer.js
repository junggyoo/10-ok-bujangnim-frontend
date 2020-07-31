import React, { Fragment } from "react";
import "./Footer.scss";

class Footer extends React.Component {
  state = {
    emailFocused: false,
  };

  focusEmailInput = () => {
    this.setState({ focused: !this.state.focused });
  };

  render() {
    const { emailFocused } = this.state;
    return (
      <>
        <footer className="Footer">
          <div className="footerContent">
            <div className="newsLetter">
              <p className="subscribe">구독하기</p>
              <div className="inputBox">
                <span
                  className={emailFocused ? "textEmail:focus" : "textEmail"}
                >
                  이메일주소
                </span>
                <div
                  class="inputEmail"
                  onFocus={this.focusEmailInput}
                  onBlur={this.focusEmailInput}
                >
                  <input type="text"></input>
                </div>
              </div>
              <p className="underInput">
                제품,스토어,이벤트,그리고 이솝이 고른 글들이 담긴 이솝
                뉴스레터를 받고 싶습니다.
              </p>
            </div>
            <div className="footerRight">
              <ul className="footerInquiry">
                <li className="listTitle">문의하기</li>
                <li>문의하기</li>
                <li>FAQS</li>
                <li>배송 및 반품</li>
                <li>배송 확인</li>
                <li>이용 약관</li>
                <li>개인정보 정책</li>
              </ul>
              <ul className="footerInfo">
                <li className="listTitle">브랜드소개</li>
                <li>브랜드 스토리</li>
                <li>채용</li>
                <li>마케팅 문의</li>
                <li>기업용 선물</li>
                <li>페이셜 어포인트먼트</li>
                <li>개인 정보 보호 정책</li>
              </ul>
              <ul className="footerSocial">
                <li className="listTitle">소셜</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Kakao Plus Friend</li>
                <li>Naver Post</li>
              </ul>
            </div>
          </div>
          <div className="footerAddress">
            상호: 이솝코리아 유한회사 | 주소: 서울특별시 강남구 선릉로 162길 3
            이솝코리아 3층 | 대표자: 마이클안토니오키프 | 대표전화: 1800-1987 |
            대표 이메일: aesop@aesop.com | 호스팅 사업자: SAP Hybris | 사업자
            등록 번호: 220-88-56014 | 통신판매업 신고번호: 2014-서울강남-02300
          </div>
        </footer>
        <div className="aesopKorea">
          <p>© 이솝</p>
          <p>대한민국</p>
        </div>
      </>
    );
  }
}
export default Footer;
