import React, { useState, useEffect } from "react";

import Logo from "../assets/Logo.png";
import { searchProducts } from "../utils/productSlice";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  useEffect(() => {
    dispatch(searchProducts(search));
  }, [search]);
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
          <i className="ri-shopping-cart-2-line text-2xl cursor-pointer"></i>
        </Link>
      )}
    </div>
  );
};

export default Header;
