import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            btnChange: false
        };
    }

    inputHandler =(e)=> {
        this.setState({
            [e.target.name]:e.target.value
        },()=>console.log(this.state));

    //     if (this.state.email.length > 5 && this.state.password.length > 5) {
    //         this.setState({
    //             btnChange: true
    //         });
    //     } else {
    //         this.setState({
    //             btnChange : false
    //         })
    //     }
     };
    componentDidUpdate(_prevProps,prevState){
        if(prevState.email !== this.state.email || prevState.password !== this.state.password){
            console.log("pass")
            if(this.state.email.length > 5 && this.state.password.length > 5){
              this.setState({btnChange:true})
            }
            else{
                this.setState({btnChange:false})
            }
        }
    }
    // 로그인용 버튼
    hadleBtn = (e) => {
        fetch("http://10.58.5.36:8000/user/sign-in", {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.pw
            })})
            .then(res => res.json())
            .then(res => {
                if (res.token) { 
                    localStorage.setItem('aesopToken', res.token);
                    this.props.history.push("/main")
                    console.log(res.token)
                } 
            })
        
    }
    

    // 회원가입용
    handleSignUp = (e) => {
        this.props.history.push('/Signup');
    }

  render() {
      console.log("render :::::", this.state)
    return (
        <div className="Login">
            <div className="modalBody">
            <div className="introduceBox">
                <h2 className="loginTitle">안녕하세요.</h2>
                <div className="loginSub">유효한 이메일 주소를 입력하세요</div>
            </div>
            <div className="formText">
                <label>
                    <input onChange={this.inputHandler} className="formTextInput" name="email" placeholder="이메일 주소"  />
                    {/* <span className="FormTextLabel">이메일 주소</span> 이부분은 애니메이션이 요구됨. 해결방안이 시급. */}
                </label>
            </div>
            <div className="formText">
                <input onChange={this.inputHandler} className="formTextInput" name="password" placeholder="비밀번호" type="password" />
            </div>
            <button onClick={this.hadleBtn} type="button" className={this.state.btnChange? "activeBTN" : "unactiveBTN"}>
                <div className="btnContent">
                    로그인
                </div>
            </button>
            <button onClick={this.handleSignUp} type="button" className="signUpcolor">
                <div className="signUpBtn">
                    회원가입
                </div>
            </button>
        </div>
        </div>
    )
  }
}

export default Login;