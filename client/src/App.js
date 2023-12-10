import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../src/components/views/LandingPage/LandingPage";
import NavBar from "../src/components/views/NavBar/NavBar";
import RegisterPage from "../src/components/views/RegisterPage/RegisterPage";
import LoginPage from "../src/components/views/LoginPage/LoginPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registerPage" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
