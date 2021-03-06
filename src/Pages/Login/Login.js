import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as loginAPI from "../../config";
import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pw: "",
    };
  }

  hadleValueID = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  hadleValuePW = (e) => {
    this.setState({
      pw: e.target.value,
    });
  };

  // 로그인용 버튼
  hadleBtn = (e) => {
    fetch(loginAPI, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.pw,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          localStorage.setItem("aesopToken", res.token);
          //로그인시 nav에 email 전달하는 함수 (부모에게 전달)
          this.props.showID(this.state.email);
          this.props.handleLogin();
        }
      });
  };

  // 회원가입용
  handleSignUp = (e) => {
    this.props.history.push("/signup");
  };

  render() {
    return (
      <div className="Login">
        <div className="modalBody">
          <div className="introduceBox">
            <h2 className="loginTitle">안녕하세요.</h2>
            <div className="loginSub">유효한 이메일 주소를 입력하세요</div>
          </div>
          <div className="formText">
            <label>
              <input
                onChange={this.hadleValueID}
                className="formTextInput"
                name="email"
                placeholder="이메일 주소"
              />
              {/* <span className="FormTextLabel">이메일 주소</span> 이부분은 애니메이션이 요구됨. 해결방안이 시급. */}
            </label>
          </div>
          <div className="formText">
            <input
              onChange={this.hadleValuePW}
              className="formTextInput"
              type="Password"
              placeholder="비밀번호"
            />
          </div>
          <button
            onClick={this.hadleBtn}
            type="button"
            className={
              this.state.email.length > 5 && this.state.pw.length > 5
                ? "activeBTN"
                : "unactiveBTN"
            }
          >
            <div className="btnContent">로그인</div>
          </button>
          <button
            onClick={this.handleSignUp}
            type="button"
            className="signUpcolor"
          >
            <div className="signUpBtn">회원가입</div>
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
