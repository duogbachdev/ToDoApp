import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const InputForm = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <input className="xl:w-[625px] rounded-lg bg-[#262626] border border-[#0D0D0D] focus:outline-none text-xs sm:text-base not-italic font-normal leading-[22px] text-[#808080] px-2 py-1 md:py-2 md:px-4 xl:py-4" type="text" placeholder="Add a new task" />
      <button className="flex justify-center items-center gap-2 text-[#F2F2F2] bg-[#1E6F9F]  px-2 py-1 md:py-2 md:px-4 xl:py-4 rounded-lg">
        <span className="text-sm not-italic font-bold leading-5">Create</span>
        <AiOutlinePlusCircle className="w-4 h-4" />
      </button>
    </div>
  );
};

export default InputForm;
