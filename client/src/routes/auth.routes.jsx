import { Routes, Route } from "react-router-dom";
import { LogIn } from "../pages/LogIn";
import { SignUp } from "../pages/SignUp";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
