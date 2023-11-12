import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const LOCAL_STORAGE_KEY = "todo:saveToDos";

function App() {
  const [todos, setToDos] = useState([]);
  const completedToDo = todos.filter((todo) => todo.isCompleted).length;

  const setToDosAndSave = (todoTitle) => {
    setToDos(todoTitle);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoTitle));
  };

  const loadSaveToDos = () => {
    if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
      setToDos(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
    } else {
      console.log("duogbachdev");
    }
  };

  useEffect(() => {
    loadSaveToDos();
  }, []);

  const addToDo = (todoTitle) => {
    setToDosAndSave([
      ...todos,
      {
        id: crypto.randomUUID(),
        title: todoTitle,
        isCompleted: false,
      },
    ]);
    toast.success("Create new todo success !", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const toggleToDoCompleted = (todoId) => {
    const newToDos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setToDosAndSave(newToDos);
  };

  const deleteToDos = (todoId) => {
    const newToDo = todos.filter((todo) => todo.id !== todoId);
    setToDosAndSave(newToDo);
    toast.success("Delete todo success !", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <div className="font-Inter">
      <Header addToDo={addToDo} />

      <div className="bg-[#1A1A1A] h-screen pt-10 xl:pt-24">
        <div className="px-5 sm:px-7 xl:px-0 flex justify-between items-center max-w-[730px] mx-auto mb-6">
          <div className="flex items-center gap-2 text-sm not-italic font-bold text-[#4EA8DE] leading-normal">
            <h3>Created tasks</h3>
            <p className="text-xs text-[#D9D9D9] py-[2px] px-2 bg-[#333333] rounded-full">
              {todos.length}
            </p>
          </div>
          <div className="flex  items-center gap-2 text-sm not-italic font-bold text-[#8284FA] leading-normal">
            <h3>Completed</h3>
            <p className="text-xs text-[#D9D9D9] py-[2px] px-2 bg-[#333333] rounded-full">
              {completedToDo} de {todos.length}
            </p>
          </div>
        </div>
        <ToDoList
          todos={todos}
          toggleToDoCompleted={toggleToDoCompleted}
          deleteToDos={deleteToDos}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
