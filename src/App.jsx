import { useRef, useState } from "react";
import List from "./components/List";
export default function App() {
  const [toDoList, setToDoList] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value) {
      setToDoList([...toDoList, value]);
    }
  };

  const handleDelete = (index) => {
    setToDoList(toDoList.filter((_, i) => i !== index));
  };

  const handleClear = () => {
    setToDoList([]);
  };

  const inputRef = useRef(null);

  return (
    <div className="flex flex-col gap-5 w-full h-screen justify-center items-center bg-zinc-200">
      <h1 className="text-7xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
        To do list
      </h1>
      <form onSubmit={(e) => handleAdd(e)}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Write sth here to add to to-do-list"
          className="min-w-[600px] outline-none min-h-[40px] rounded-l-full text-center text-xl"
        />
        <button
          type="submit"
          className="px-7 min-h-[40px] outline-none bg-gradient-to-r from-violet-600 to-indigo-600 rounded-r-full font-semibold tracking-wider text-white"
        >
          Add
        </button>
      </form>
      <List toDoList={toDoList} handleDelete={handleDelete} />
      <button
        onClick={() => handleClear()}
        className="px-7 min-h-[40px] outline-none bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full font-semibold tracking-wider text-white"
      >
        Clear
      </button>
    </div>
  );
}
