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
      <h3 className="flex gap-2">
        {ratingArray(data.rating)?.map((rating) => (
          <i className="ri-star-fill text-[#ef271b]" key={rating}></i>
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
