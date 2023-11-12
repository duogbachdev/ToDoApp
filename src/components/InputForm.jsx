import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { toast } from "react-toastify";

const InputForm = ({ addToDo }) => {
  const [title, setTitle] = useState("");
  const onHandleChange = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      addToDo(title);
      setTitle("");
    } else {
      toast.error('Please enter a item name.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  };

  return (
    <form onSubmit={onHandleSubmit} className="flex justify-center items-center gap-2">
      <input
        onChange={onHandleChange}
        className="xl:w-[625px] rounded-lg bg-[#262626] border border-[#0D0D0D] focus:outline-none text-xs sm:text-base not-italic font-normal leading-[22px] text-[#808080] px-2 py-1 md:py-2 md:px-4 xl:py-4"
        type="text"
        placeholder="Add a new task"
        value={title}
      />
      <button className="flex justify-center items-center gap-2 text-[#F2F2F2] bg-[#1E6F9F]  px-2 py-1 md:py-2 md:px-4 xl:py-4 rounded-lg">
        <span className="text-sm not-italic font-bold leading-5">Create</span>
        <AiOutlinePlusCircle className="w-4 h-4" />
      </button>
    </form>
  );
};

export default InputForm;
