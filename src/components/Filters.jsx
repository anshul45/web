import React from "react";
import { useDispatch } from "react-redux";
import { highToLow, lowToHigh } from "../utils/productSlice";

const Filters = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="font-semibold text-xl mb-7">Filter By Price</h1>
      <h3
        className="font-medium text-lg cursor-pointer"
        onClick={() => dispatch(lowToHigh())}
      >
        Low to high
      </h3>
      <h3
        className="font-medium text-lg mt-3 cursor-pointer"
        onClick={() => dispatch(highToLow())}
      >
        High to Low
      </h3>
    </div>
  );
};

export default Filters;
