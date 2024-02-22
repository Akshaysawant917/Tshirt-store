import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import Cart from "./Cart.jsx";
import App from "../App.jsx";
import Product from "./Product.jsx";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
