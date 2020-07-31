import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Signup.scss";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pw: "",
      pwconfirm: "",
      firstname: "",
      lastname: "",
      pwError: false,
    };
  }

  hadleValueEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  hadleValuePW = (e) => {
    this.setState({
      pw: e.target.value,
    });
  };

  hadleValuepwConFirm = (e) => {
    this.setState({
      pwconfirm: e.target.value,
    });

    if (e.target.value.length > 0) {
      if (e.target.value === this.state.pw) {
        this.setState({ pwError: false });
      } else {
        this.setState({ pwError: true });
      }
    }
  };

  hadleValueFirstName = (e) => {
    this.setState({
      firstname: e.target.value,
    });
  };

  hadleValueLastName = (e) => {
    this.setState({
      lastname: e.target.value,
    });
  };

  handleSingUP = (e) => {
    fetch("http://10.58.7.53:8000/user/sign-up", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.pw,
        first_name: this.state.firstname,
        last_name: this.state.lastname,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          localStorage.setItem("aesop", res.token);
          alert("회원가입을 환영합니다.");
          this.props.history.push("/Main");
        } else {
          alert("이메일과 비밀번호를 확인해주세요.");
        }
      });
  };

  handleHaveAccount = (e) => {
    this.props.history.push("/Login");
  };

  render() {
    return (
      <div className="Signup">
        <form className="loginForm">
          <div className="modalheadingWrap">
            <h2 className="modalTitle">
              처음 만나 뵙게 되네요. 이솝에 오신 것을 환영합니다.
            </h2>
            <div className="modalSubTitle">
              계정을 만들려면 아래에 세부 정보를 입력하십시오.
            </div>
          </div>
          <div className="formRow">
            <div className="formText">
              <label>
                <input
                  onChange={this.hadleValueEmail}
                  className="formTextInput"
                  name="email"
                  placeholder="이메일 주소"
                  type="email"
                />
                {/* <span className="FormTextlabel">이메일 주소</span> */}
              </label>
            </div>
          </div>
          <div>
            <div className="formRow">
              <div className="formText">
                <label>
                  <input
                    onChange={this.hadleValuePW}
                    className="formTextInput"
                    name="password"
                    placeholder="패스워드"
                    type="password"
                  />
                  {/* <span className="FormText-label">패스워드</span> */}
                </label>
              </div>
            </div>
            <div className="formRow">
              <div className="formText">
                <label>
                  <input
                    onChange={this.hadleValuepwConFirm}
                    className="formTextInput"
                    name="passwordConfirm"
                    placeholder="패스워드 확인"
                    type="password"
                  />
                  <div
                    className={
                      this.state.pwError
                        ? "errorMessage"
                        : "noneErrorTextMessage"
                    }
                  >
                    이전에 사용했던 패스워드를 입력하세요.
                  </div>
                  {/* <span className="FormText-label">패스워드 확인</span> */}
                </label>
              </div>
            </div>
            <div className="formRowbox">
              <div className="formTextLoginName">
                <label>
                  <input
                    onChange={this.hadleValueFirstName}
                    className="formTextInput"
                    maxLength="100"
                    name="firstName"
                    placeholder="성"
                    type="text"
                  />
                  {/* <span className="FormText-label">성</span> */}
                </label>
              </div>
              <div className="formTextLoginName">
                <label>
                  <input
                    onChange={this.hadleValueLastName}
                    className="formTextInput"
                    maxLength="100"
                    name="LastName"
                    placeholder="이름"
                    type="text"
                  />
                  {/* <span className="FormText-label">이름</span> */}
                </label>
              </div>
            </div>
          </div>
          <button
            onClick={this.handleSingUP}
            className={
              this.state.email.length > 5 &&
              this.state.pw === this.state.pwconfirm &&
              this.state.firstname.length >= 1 &&
              this.state.lastname.length >= 1
                ? "btnSignUPActive"
                : "btnSignUPunActive"
            }
            type="submit"
          >
            <div className="btnContent">
              <span className="btnLabel">등록</span>
            </div>
          </button>
          <div className="loginHaveAccount">
            <button
              onClick={this.handleHaveAccount}
              className="loginHaveAccountBTN"
            >
              이솝 계정을 가지고 계십니까?
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Signup);
