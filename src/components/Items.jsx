import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";

const Items = ({ work, onDelete }) => {
  return (
    <div className="border-3 border-blue-500 py-2 flex justify-between mx-3 bg-[#1a343d] px-2 md:px-3 rounded-3">
      <div>
        <h1 className="text-white text-2xl">{work}</h1>
      </div>
      <div>
        <button onClick={onDelete} className="text-4xl text-white">
          <FaDeleteLeft />
        </button>
      </div>
    </div>
  );
};

export default Items;
