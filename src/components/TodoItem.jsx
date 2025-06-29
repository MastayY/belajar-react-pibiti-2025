import React, { useContext } from "react";
import { TodoContext } from "../TodoContext"; //Import context untuk todo

function TodoItem({ todo }) {
  const { handleDeleteTodo } = useContext(TodoContext);
  return (
    <li key={todo.id} className="todo-item">
      <span>{todo.text}</span>
      <button
        onClick={() => handleDeleteTodo(todo.id)}
        className="delete-button"
      >
        Hapus
      </button>
    </li>
  );
}

export default TodoItem;
