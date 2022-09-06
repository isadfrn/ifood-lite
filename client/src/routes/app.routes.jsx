import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Orders } from "../pages/Orders";
import { Details } from "../pages/Details";
import { CreateProduct } from "../pages/CreateProduct";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/details" element={<Details />} />
      <Route path="/create" element={<CreateProduct />} />
    </Routes>
  );
}
