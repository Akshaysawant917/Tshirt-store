import React from "react";
import { CartState } from "../contex/Contex.jsx";
import { useState } from "react";
import { useEffect } from "react";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div className="w-full flex flex-col justify-center items-center m-5">
      {cart.map((product) => (
        <div className="lg:w-[50%] w-[80%] flex-col mb-2 flex lg:flex-row px-10 py-2 items-center justify-between bg-slate-400">
          <img src={product.imgUrl} width={100} alt="" />
          <h3>{product.productName}</h3>
          <h4>price:{product.price}</h4>
        </div>
      ))}
      <div className="lg:w-[50%] w-[80%] p-2 text-center bg-slate-400">
        <span>subtotal:({cart.length}) </span>
        <span className="text-xl font-bold">Total to pay :{total} </span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
