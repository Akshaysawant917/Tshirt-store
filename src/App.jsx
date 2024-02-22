import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartState } from "./contex/Contex.jsx";

const App = () => {
  const {
    state: { products, cart },
    dispatch,
  } = CartState();
  console.log(products);
  console.log(cart);
  return (
    <div className="min-h-min flex flex-wrap justify-center items-center bg-slate-200  px-10 py-5 w-full gap-2">
      {products.map((product) => (
        <Link
          key={product.id}
          to={{
            pathname: `/product/${product.id}`,
          }}
        >
          <div className="max-w-md rounded overflow-hidden shadow-2xl">
            <img
              className="w-[250px] h-[250px] transition duration-300 ease-in-out transform hover:scale-105"
              src={product.imgUrl}
              alt="tshirt image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {product.productName}
              </div>
              <p className="text-gray-700 text-base">Price:{product.price}</p>
            </div>
            <div className="px-6 py-4">
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
        </Link>
      ))}
    </div>
  );
};

export default App;
