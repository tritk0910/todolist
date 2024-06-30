import { useRef, useState } from "react";
import List from "./components/List";
import cn from "./lib/utils";
export default function App() {
  const [toDoList, setToDoList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value) {
      setToDoList([...toDoList, value]);
      // reset input
      inputRef.current.value = "";
    }
  };

  const handleDelete = (index) => {
    setToDoList(toDoList.filter((_, i) => i !== index));
    if (index == editIndex) {
      setIsEdit(false);
      setEditIndex(null);
      inputRef.current.value = "";
    }
  };

  const handleClear = () => {
    setToDoList([]);
    setIsEdit(false);
    setEditIndex(null);
    inputRef.current.value = "";
  };

  const handleUpdate = (e, index) => {
    // ngăn chặn sự kiện mặc định của form
    e.preventDefault();
    // lấy value từ input
    const value = inputRef.current.value;
    // tạo mảng mới từ mảng cũ
    const newToDoList = [...toDoList];
    // thay thế giá trị mới vào vị trí cũ
    newToDoList[index] = value;
    // cập nhật lại state
    setToDoList(newToDoList);
    // reset input và trạng thái edit
    inputRef.current.value = "";
    setIsEdit(false);
  };

  const handleEdit = (index) => {
    setIsEdit(true);
    setEditIndex(index);
    // lấy giá trị cần edit
    const editValue = toDoList.at(index);
    // set giá trị đó vào input
    inputRef.current.value = editValue;
  };

  const handleCancelEdit = () => {
    setIsEdit(false);
    inputRef.current.value = "";
  };

  const inputRef = useRef(null);

  return (
    <div className="flex flex-col gap-5 w-full h-screen justify-center items-center bg-zinc-200">
      <h1 className="text-7xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
        To do list
      </h1>
      <form
        onSubmit={(e) => {
          if (isEdit) {
            handleUpdate(e, editIndex);
          } else handleAdd(e);
        }}
        className="flex items-center min-w-[800px]"
      >
        {isEdit && (
          <button
            type="button"
            onClick={handleCancelEdit}
            className="px-7 min-h-[40px] outline-none bg-gradient-to-r from-violet-600 to-indigo-600 rounded-l-full font-semibold tracking-wider text-white"
          >
            Cancel
          </button>
        )}
        <input
          type="text"
          ref={inputRef}
          placeholder={
            isEdit
              ? "Write sth here to update item"
              : "Write sth here to add to to-do-list"
          }
          className={cn(
            "outline-none min-h-[40px] w-full rounded-l-full text-center text-xl",
            {
              "rounded-none": isEdit,
            }
          )}
        />
        <button
          type="submit"
          className="px-7 min-h-[40px] outline-none bg-gradient-to-r from-violet-600 to-indigo-600 rounded-r-full font-semibold tracking-wider text-white"
        >
          {isEdit ? "Edit" : "Add"}
        </button>
      </form>
      <List
        toDoList={toDoList}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <button
        onClick={() => handleClear()}
        className="px-7 min-h-[40px] outline-none bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full font-semibold tracking-wider text-white"
      >
        Clear
      </button>
    </div>
  );
}
