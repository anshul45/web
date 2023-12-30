import React from "react";
import CartProduct from "../components/CartProduct";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartData = useSelector((store) => store.cart.cartData);
  return (
    <>
      {cartData.length > 0 ? (
        <div className="px-12 py-20 flex flex-col gap-5">
          <div className="pl-40 flex justify-between items-center font-semibold text-2xl">
            <div></div>
            <div></div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>
          <div className="flex flex-col gap-9">
            {cartData.map((data) => (
              <CartProduct key={data.id} data={data} />
            ))}
          </div>
        </div>
      ) : (
        <div className="h-[calc(100vh-65px)] flex flex-col gap-40 justify-center items-center">
          <h1 className="font-semibold text-4xl">Sorry No Item in Cart..</h1>
          <Link to="/">
            <button className="border-2 w-72 rounded-lg py-1.5 border-white">
              Back to Home
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
