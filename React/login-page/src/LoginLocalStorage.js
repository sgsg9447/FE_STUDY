import React, { useRef } from "react";
import "./LoginLocalStorage.css";
import Home from "./pages/Home";
function LoginWithLocalStorage() {
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
    <div>
      {getEmail && getPassword ? (
        <Home />
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" ref={email} />
          </div>
          <div>
            <input type="password" ref={password} />
          </div>
          <button>Login</button>
        </form>
      )}
    </div>
  );
}

export default LoginWithLocalStorage;
