import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../src/components/views/LandingPage/LandingPage";
import NavBar from "../src/components/views/NavBar/NavBar";
import RegisterPage from "../src/components/views/RegisterPage/RegisterPage";
import LoginPage from "../src/components/views/LoginPage/LoginPage";
import Auths from "./hoc/auth";
// 왜 임포트랑 파일명이 달라야하지?
// null은 아무나 true 로그인한 유저만 false는 로그인은 출입불가
function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={Auths(LandingPage, null)} />
        <Route path="/login" element={Auths(LoginPage, false)} />
        <Route path="/register" element={Auths(RegisterPage, false)} />
      </Route>
    </Routes>
  );
}

export default App;
