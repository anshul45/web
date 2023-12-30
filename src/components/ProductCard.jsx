import React from "react";

const ProductCard = ({ data }) => {
  //function for rating
  const ratingArray = (rating) => {
    const starArray = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      starArray.push(i);
    }
    return starArray;
  };

  return (
    <div className="flex flex-col gap-2 items-center w-64 pb-2 bg-[#232323] rounded-xl  relative cursor-pointer">
      <div className="text-xs bg-red-400 py-0.5 px-1 rounded-xl absolute -right-2 -top-2">
        -{data.discountPercentage}%
      </div>
      <img
        className="rounded-tl-xl w-full h-52"
        src={data.thumbnail}
        alt="product_image"
      />
      <h3 className="flex">
        {ratingArray(data.rating)?.map((rating) => (
          <svg
            className="w-4 h-4 text-yellow-300 ms-1"
            fill="currentColor"
            viewBox="0 0 22 20"
            key={rating}
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
      </h3>
      <h1>{data?.title.slice(0, 20)}...</h1>
      <h1 className="bg-white text-black w-fit px-1 py-0.5 text-sm rounded-lg">
        ₹{data.price}
      </h1>
    </div>
  );
};

export default ProductCard;
