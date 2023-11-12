import React, { useState } from "react";
import ToDo from "./ToDo";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PAGE_SIZE = 5; // Number of items per page

const ToDoList = ({ todos, toggleToDoCompleted, deleteToDos }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(todos.length / PAGE_SIZE);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentTodos = todos.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      {currentTodos.map((todo) => (
        <ToDo
          key={todo.id}
          todo={todo}
          toggleToDoCompleted={toggleToDoCompleted}
          deleteToDos={deleteToDos}
        />
      ))}
      {/* Pagination controls */}
      <div className="text-white flex items-center gap-5 justify-center">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous Page
        </button>
        <span>{`${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default ToDoList;
