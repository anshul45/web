import React from "react";

const CartProduct = () => {
  const data = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <i class="ri-close-line"></i>
        <img alt="product_image" className="w-32 h-20" src={data?.thumbnail} />
        <h1>{data.title}</h1>
        <h1>{data.price}</h1>
        <div>qua</div>
        <h1>subtotal</h1>
      </div>
    </>
  );
};

export default CartProduct;
