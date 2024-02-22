import React from "react";
import cartsvg from "../assets/cart.svg";
import { Link } from "react-router-dom";
import { CartState } from "../contex/Contex.jsx";
const Header = () => {
  const {
    state: { cart },
  } = CartState();
  return (
    <div className="flex justify-between p-5 items-center h-20 bg-slate-400 ">
      <Link
        to="/"
        className="text-white text-4xl font-bold hover:text-gray-200"
      >
        TEES FACTORY
      </Link>
      <Link to="/Cart" className="text-white flex hover:text-gray-200">
        <img src={cartsvg} alt="" />
        <p className="text-black">{cart.length}</p>
      </Link>
    </div>
  );
};

export default Header;
