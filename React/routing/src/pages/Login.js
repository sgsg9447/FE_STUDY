import React, { useRef } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";

function Login() {
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  const handleSubmit = () => {
    if (
      email.current.value === "abc@gmail.com" &&
      password.current.value === "12345"
    ) {
      localStorage.setItem("emailData", "abc@gmail.com");
      localStorage.setItem("passwordData", "12345");
    }
  };

  return (
    <div className="login__container">
      <div className="login__box__top">
        {getEmail && getPassword ? (
          <Link to={"/home"}>Home</Link>
        ) : (
          <form onSubmit={handleSubmit}>
            <img
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
              alt="insta_logo"
            />
            <Input
              type="text"
              ref={email}
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <Input type="password" ref={password} placeholder="비밀번호" />
            <Button content="Login" />
            <p>또는</p>
            <p>페이스북으로 로그인</p>
            <p>비밀번호를 잊으셨나요?</p>
            <div className="login__box__middle">
              <span>계정이 없으신가요? </span>
              <span>가입하기</span>
            </div>
            <div className="login__box__bottom">
              <p>앱을 다운로드하세요.</p>
              <div className="login__box__bottom__img__box">
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
                  alt="AppStore에서 다운로드하기"
                />
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
                  alt="구글플레이에서 다운로드하기"
                />
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
