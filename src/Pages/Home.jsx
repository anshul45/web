import React, { useEffect, useState } from "react";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAllProducts, searchProducts } from "../utils/productSlice";
import Header from "../components/Header";

const Home = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.product.allProducts);
  const navigate = useNavigate();
  const [filter, setFilter] = useState(false);
  const getProducts = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const response = await data.json();
    dispatch(addAllProducts(response.products));
  };
  useEffect(() => {
    getProducts();
  }, []);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="px-12 py-3 static">
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
