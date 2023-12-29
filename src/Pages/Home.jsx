import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAllProducts, searchProducts } from "../utils/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.product.allProducts);
  const navigate = useNavigate();
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState("");
  const getProducts = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const response = await data.json();
    dispatch(addAllProducts(response.products));
  };
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    dispatch(searchProducts(search));
  }, [search]);

  const handleClick = (id) => {
    console.log("clicked" + id);
    navigate(`/product/${id}`);
  };
  return (
    <div className="px-12 py-3 static">
      <div className="flex justify-between items-center ">
        <img src={Logo} width={60} height={60} className="cursor-pointer" />
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
        <i className="ri-shopping-cart-2-line text-2xl cursor-pointer"></i>
      </div>
      <div>
        <h1
          className="font-semibold text-2xl my-10 cursor-pointer"
          onClick={() => setFilter(!filter)}
        >
          <i className="ri-equalizer-3-line"></i>{" "}
          {filter ? "Hide Filters" : "Show Filters"}
        </h1>
        <div className="flex gap-5">
          {filter && (
            <div className="flex-[0.2] mt-24">
              <Filters />
            </div>
          )}
          <div className="flex-[1.5] flex gap-5 flex-wrap justify-between">
            {allProducts.length > 0 &&
              allProducts.map((product) => (
                <div key={product.id} onClick={() => handleClick(product.id)}>
                  <ProductCard data={product} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
