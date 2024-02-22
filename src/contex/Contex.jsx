import React from "react";
import { useReducer, createContext, useContext } from "react";
import { cartReducer } from "./Reducer";
import black from "../assets/black.jpg";
import red from "../assets/red.jpg";
import stripe from "../assets/stripe.jpg";
import full from "../assets/full.jpg";
import graphic from "../assets/graphic.jpg";
import color from "../assets/color.jpg";
import yellow from "../assets/yellow.jpg";
import oversized from "../assets/oversized.jpg";
import half from "../assets/half.jpg";
import sports from "../assets/sports.jpg";

const Cart = createContext();

const Context = ({ children }) => {
  const products = [
    {
      id: 1,
      productName: "Cool Black T-shirt",
      imgUrl: black,
      price: 199,
    },
    {
      id: 2,
      productName: "Graphic Tee",
      imgUrl: graphic,
      price: 249,
    },
    {
      id: 3,
      productName: "Red T-shirt",
      imgUrl: red,
      price: 555,
    },
    {
      id: 4,
      productName: "Striped Tee",
      imgUrl: stripe,
      price: 449,
    },
    {
      id: 5,
      productName: "Full tee",
      imgUrl: full,
      price: 499,
    },
    {
      id: 6,
      productName: "Yellow olane tshirt",
      imgUrl: yellow,
      price: 349,
    },
    {
      id: 7,
      productName: "Sports Tee",
      imgUrl: sports,
      price: 399,
    },
    {
      id: 8,
      productName: "Half stylish tee",
      imgUrl: half,
      price: 555,
    },
    {
      id: 9,
      productName: "Striped colored Tee",
      imgUrl: color,
      price: 549,
    },
    {
      id: 10,
      productName: "Oversized tee",
      imgUrl: oversized,
      price: 699,
    },
  ];

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
