import React from "react";
import { BsCircle, BsCheckCircle, BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const ToDoList = () => {
  return (
    <div className="max-w-[730px] mx-auto px-5 xl:px-0">
      <div className="flex items-center gap-x-3 px-4 py-4 bg-[#262626] rounded-lg mb-3">
        <BsCircle className="text-[#4EA8DE] w-20 h-20 xl:w-6 xl:h-6 hover:cursor-pointer" />
        <p className="text-sm not-italic font-normal leading-5 text-[#F2F2F2]">
          Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames
          integer.
        </p>
        <div className="flex items-center gap-2">
          <FiEdit className="text-[#808080] w-6 h-6 hover:cursor-pointer" />
          <BsTrash className="text-[#808080] w-6 h-6 hover:cursor-pointer" />
        </div>
      </div>

      <div className="flex items-center gap-3 px-4 py-4 bg-[#262626] rounded-lg">
        <BsCheckCircle className="text-[#5E60CE] xl:text-[#F2F2F2] xl:bg-[#5E60CE] rounded-full w-20 h-20 xl:w-6 xl:h-6 hover:cursor-pointer" />
        <p className="text-sm not-italic font-normal leading-5 text-[#F2F2F2] line-through">
          Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames
          integer.
        </p>
        <div className="flex items-center gap-2">
          <FiEdit className="text-[#808080] w-6 h-6 hover:cursor-pointer" />
          <BsTrash className="text-[#808080] w-6 h-6 hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
