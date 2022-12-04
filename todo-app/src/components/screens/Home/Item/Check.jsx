import React from "react";
import { BsCheck } from "react-icons/bs";

const Check = ({ isComplete }) => {
  return (
    <div
      className={`mr-3 border-2 rounded-md border-pink-400  
        ${isComplete ? "bg-pink-400" : ""} 
        w-6 h-6 flex items-center justify-center`}
    >
      {isComplete && <BsCheck size={24} className="text-gray-900" />}
    </div>
  );
};

export default Check;
