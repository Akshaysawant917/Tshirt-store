import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartState } from "../contex/Contex.jsx";
const Product = () => {
  const { id } = useParams();
  const {
    state: { products, cart },
    dispatch,
  } = CartState();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div
      className="container  mx-auto px-4 py-8 bg-slate-200 "
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className=" w-[600px] object-cover md:w-64"
              src={product.imgUrl}
              alt={product.productName}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide mb-5 lg:text-5xl text-indigo-500 font-semibold">
              {product.productName}
            </div>
            <p className="mt-2 mb-2 text-lg text-gray-600">
              INR {product.price.toFixed(2)} RS
            </p>

            <p>
              "Stay cool and stylish with our latest Cool T-shirt. Made from
              premium quality fabric, this T-shirt offers both comfort and
              style. Available in multiple colors and sizes."
            </p>
            {cart.some((p) => p.id === product.id) ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  });
                }}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Remove from cart
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: product,
                  });
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
