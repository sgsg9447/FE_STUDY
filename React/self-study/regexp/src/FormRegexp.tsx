import React from "react";

const FormRegexp = () => {
  // 핸드폰번호 유효성 검사
  const checkPhonenumber = (e: { target: { value: string } }) => {
    // '-' 입력 시
    var regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
    // 숫자만 입력시
    var regExp2 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    // 형식에 맞는 경우 true 리턴
    console.log("핸드폰번호 유효성 검사 :: ", regExp.test(e.target.value));
  };

  //비밀번호 유효성 검사
  const checkPassword = (e: { target: { value: string } }) => {
    //  8 ~ 10자 영문, 숫자 조합
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
    // 형식에 맞는 경우 true 리턴
    console.log("비밀번호 유효성 검사 :: ", regExp.test(e.target.value));
  };

  // 이메일 유효성 검사
  const checkEmail = (e: { target: { value: string } }) => {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // 형식에 맞는 경우 true 리턴
    console.log("이메일 유효성 검사 :: ", regExp.test(e.target.value));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="phone number"
          onBlur={checkPhonenumber}
        />
      </div>
      <div>
        <input type="password" placeholder="password" onBlur={checkPassword} />
      </div>
      <div>
        <input type="email" placeholder="email" onBlur={checkEmail} />
      </div>
    </div>
  );
};

export default FormRegexp;
