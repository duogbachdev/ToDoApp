import React from "react";
import { BsCircle, BsCheckCircle, BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const ToDo = ({ todo, toggleToDoCompleted, deleteToDos }) => {
  const handleDelete = () => {
    const shouldDelete = window.confirm("Are you sure you want to delete this item?");
    if (shouldDelete) {
      deleteToDos(todo.id);
    }
  };
  return (
    <div className="max-w-[730px] mx-auto px-5 xl:px-0">
      <div className="flex items-center gap-x-3 px-4 py-4 bg-[#262626] rounded-lg mb-3">
        <button className="w-6 h-6" onClick={() => toggleToDoCompleted(todo.id)}>
          {todo.isCompleted ? (
            <BsCheckCircle className="text-[#5E60CE] xl:text-[#F2F2F2] xl:bg-[#5E60CE] rounded-full hover:cursor-pointer" />
          ) : (
            <BsCircle className="text-[#4EA8DE] hover:cursor-pointer" />
          )}
        </button>
        <p
          className={
            todo.isCompleted
              ? "text-sm not-italic font-normal leading-5 text-[#808080] w-[600px] line-through"
              : "text-sm not-italic font-normal leading-5 text-[#F2F2F2] w-[600px]"
          }
        >
          {todo.title}
        </p>
        <div className="flex items-center gap-2">
          <FiEdit className="text-[#808080] w-6 h-6 hover:cursor-pointer" />
          <button onClick={handleDelete}>
            <BsTrash className="text-[#808080] w-6 h-6 hover:cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
