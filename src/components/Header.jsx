import React, { useState, useEffect } from "react";

import Logo from "../assets/Logo.png";
import { searchProducts } from "../utils/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const cartData = useSelector((store) => store.cart.cartData);

  const location = useLocation();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  useEffect(() => {
    dispatch(searchProducts(search));
  }, [search]);

  const totalQuantity = cartData?.reduce(
    (total, product) => total + product.qty,
    0
  );

  return (
    <div className="flex justify-between items-center pt-3 px-9 ">
      <Link to="/">
        <img src={Logo} width={60} height={60} className="cursor-pointer" />
      </Link>
      {location.pathname === "/" && (
        <div className="flex gap-1 items-center bg-[#696969] px-2 py-0.5 w-96 rounded-md ">
          <input
            type="text"
            value={search}
            className="bg-inherit w-full focus:outline-none py-1"
            placeholder="Search Products.."
            onChange={(e) => setSearch(e.target.value)}
          />
          <i className="ri-search-2-line cursor-pointer"></i>
        </div>
      )}
      {location.pathname !== "/cart" && (
        <Link to="/cart">
          <i className="ri-shopping-cart-2-line text-2xl cursor-pointer relative"></i>
          <h1
            className={
              totalQuantity > 0
                ? "absolute top-3 right-7 bg-red-500 px-1.5  py-0.5 text-xs mt-2 rounded-full" &&
                  totalQuantity < 10
                  ? "absolute top-3 right-7 bg-red-500   py-0.5 text-xs mt-2 rounded-full px-1.5"
                  : "absolute top-3 right-7 bg-red-500  py-0.5 text-xs mt-2 rounded-full px-1"
                : ""
            }
          >
            {totalQuantity > 0 && totalQuantity}
          </h1>
        </Link>
      )}
    </div>
  );
};

export default Header;
