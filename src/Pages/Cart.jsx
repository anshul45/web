import React from "react";
import CartProduct from "../components/CartProduct";

const Cart = () => {
  return (
    <div className="px-12 py-20 flex flex-col gap-5">
      <div className="pl-52 flex justify-between items-center font-semibold text-2xl">
        <div></div>
        <div></div>
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
      </div>
      <CartProduct />
      <CartProduct />
      <CartProduct />
    </div>
  );
};

export default Cart;
