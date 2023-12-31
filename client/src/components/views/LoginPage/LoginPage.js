import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { loginUser } from "../../../_actions/user_action";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEamilHandle = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordHandle = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((response) => {
      console.log(response.payload);
      if (response.payload.loginSuccess) {
        alert("회원가입이 완료되었습니다.");

        navigate("/");
      } else {
        alert("회원가입 중 오류가 발생했습니다.");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="eamil" value={Email} onChange={onEamilHandle} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandle} />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
