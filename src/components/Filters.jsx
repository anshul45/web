import React from "react";

const Filters = () => {
  return (
    <div>
      <h1 className="font-semibold text-xl mb-7">Filter By Price</h1>
      <h3 className="font-medium text-lg cursor-pointer" onClick="">
        Low to high
      </h3>
      <h3 className="font-medium text-lg mt-3 cursor-pointer" onClick="">
        High to Low
      </h3>
    </div>
  );
};

export default Filters;
