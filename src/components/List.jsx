export default function List({ toDoList, handleDelete, handleEdit }) {
  return (
    <ul className="max-h-[300px] overflow-y-scroll">
      {toDoList.map((toDo, index) => (
        <li
          key={index}
          className="list-outside rounded-[20px] p-1 w-96 text-lg mx-5 bg-clip-padding border-[10px] bg-gradient-to-r from-violet-600 to-indigo-600"
        >
          <div className="size-full bg-zinc-200 rounded-[7px] px-5 py-2 flex justify-between">
            <span className="font-semibold tracking-wide text-xl">{toDo}</span>
            <div className="flex gap-x-3">
              <button
                className="text-blue-600 font-semibold tracking-wide"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="block text-red-500 font-bold"
                onClick={() => handleDelete(index)}
              >
                x
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
