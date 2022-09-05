import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Orders } from "../pages/Orders";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Orders />} />
    </Routes>
  );
}
