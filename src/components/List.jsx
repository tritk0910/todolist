export default function List({ toDoList, handleDelete }) {

  return (
    <ul className="max-h-96 overflow-auto">
      {toDoList.map((toDo, index) => (
        <li
          key={index}
          className="border-black border-b w-96 text-lg flex justify-between mb-2 mx-5"
        >
          {toDo}
          <button
            className="block text-red-500 font-bold"
            onClick={() => handleDelete(index)}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
}
