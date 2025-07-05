import React, { useState } from "react";
import { useTodoContext } from "../../context/TodoContext";

const TodoForm = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") {
      alert("Todo tidak boleh kosong");
      return;
    }

    addTodo(text);

    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4">
      <input
        type="text"
        className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Tambahkan Kegiatan Baru.."
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Tambah
      </button>
    </form>
  );
};

export default TodoForm;
