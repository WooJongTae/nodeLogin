import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../src/components/views/LandingPage/LandingPage";
import NavBar from "../src/components/views/NavBar/NavBar";
import RegisterPage from "../src/components/views/RegisterPage/RegisterPage";
import LoginPage from "../src/components/views/LoginPage/LoginPage";
import Auth from "./hoc/Auth";
function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={Auth(LandingPage, false)} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registerPage" element={Auth(RegisterPage, false)} />
      </Route>
    </Routes>
  );
}

export default App;
