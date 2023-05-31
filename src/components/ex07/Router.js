import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";

export const LoginExRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
};
