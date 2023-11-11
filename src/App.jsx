import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="font-Inter">
      <Header />

      <div className="bg-[#1A1A1A] h-screen pt-10 xl:pt-24">
        <div className="px-5 sm:px-7 xl:px-0 flex justify-between items-center max-w-[730px] mx-auto mb-6">
          <div className="flex items-center gap-2 text-sm not-italic font-bold text-[#4EA8DE] leading-normal">
            <h3>Created tasks</h3>
            <p className="text-xs text-[#D9D9D9] py-[2px] px-2 bg-[#333333] rounded-full">5</p>
          </div>
          <div className="flex  items-center gap-2 text-sm not-italic font-bold text-[#8284FA] leading-normal">
            <h3>Completed</h3>
            <p className="text-xs text-[#D9D9D9] py-[2px] px-2 bg-[#333333] rounded-full">2 de 5</p>
          </div>
        </div>
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
