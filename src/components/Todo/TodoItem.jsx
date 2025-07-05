import React from "react";
import { useTodoContext } from "../../context/TodoContext";
import { Link } from "react-router-dom";

function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo } = useTodoContext();

  return (
    <li
      className={`flex items-center justify-between p-4 mb-2 rounded shadow ${
        todo.isCompleted ? "bg-green-100 line-through text-gray-400" : "bg-white"
      }`}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleTodo(todo.id)}
          className="w-4 h-4 accent-green-500"
        />
        <span className="text-base">{todo.text}</span>
      </div>

      <div className="flex gap-2">
        <Link
          to={`/todos/${todo.id}`}
          className="px-3 py-1 text-xs font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          View
        </Link>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="px-3 py-1 text-xs font-medium text-white bg-red-500 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
