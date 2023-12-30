import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [data, setData] = useState();
  const [totalItems, setTotalItems] = useState(0);
  const [image, setImage] = useState("");
  const [cartData, setCartData] = useState([]);
  const { id } = useParams();

  const getProducts = async (productId) => {
    const response = await fetch("https://dummyjson.com/products/" + productId);

    const products = await response.json();

    setData(products);
    setImage(products.images[0]);
  };

  console.log(cartData);

  useEffect(() => {
    getProducts(id);
  }, []);

  return (
    <div className="flex px-4 h-[calc(100vh-65px) mt-8">
      <div className="flex-[0.2] flex flex-col gap-2 items-center mt-14 ">
        {data?.images?.map((img, index) => (
          <img
            src={img}
            key={index}
            alt="products"
            className="w-28 cursor-pointer h-20"
            onClick={() => setImage(img)}
          />
        ))}
      </div>
      <div className="flex-[0.5]">
        <img
          alt="selectedProduct"
          src={image}
          className="w-[100%] h-[500px] object-contain"
        />
      </div>
      <div className="flex-[0.3] ml-9">
        <h1 className="font-semibold text-3xl mb-3">{data?.title}</h1>
        <h1>{data?.rating}</h1>
        <h1 className="font-medium text-xl mt-4">{data?.description}</h1>
        <div className="flex gap-6">
          <div className="flex gap-3 items-center">
            <i
              className="ri-subtract-line  text-xl pt-5 cursor-pointer"
              onClick={() => {
                if (totalItems > 0) {
                  setTotalItems(totalItems - 1);
                }
              }}
            ></i>

            <div className="border-2 w-12 rounded-lg py-0.5 border-white text-center mt-5 ">
              {totalItems}
            </div>
            <i
              className="ri-add-line text-xl pt-5 cursor-pointer"
              onClick={() => {
                if (totalItems < 10) {
                  setTotalItems(totalItems + 1);
                }
              }}
            ></i>
          </div>
          <button
            className="border-2 w-56 rounded-lg py-1.5 border-white text-center mt-5 "
            onClick={() => {
              setTotalItems(0);
              setCartData([data, { qty: totalItems }]);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
