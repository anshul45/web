import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../utils/cartSlice";

const CartProduct = ({ data }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(data.id));
  };

  return (
    <>
      <div className="flex justify-between ">
        <i
          className="ri-close-line cursor-pointer text-[#ef271b]"
          onClick={handleRemoveFromCart}
        ></i>
        <img alt="product_image" className="w-32 h-20 " src={data.thumbnail} />
        <h1 className="w-14">{data.title}</h1>
        <h1 className="w-12">{data.price}</h1>
        <div className="w-12">{data?.qty}</div>
        <h1 className="w-12">{data.price * data?.qty}</h1>
      </div>
    </>
  );
};

export default CartProduct;
