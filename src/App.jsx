import React, { useState, useEffect } from "react";
import "./style.css"; // Ini import css
import Card from "./components/Card"; //Import sebuah komponen Card
import { TodoContext } from "./TodoContext"; //Import context untuk todo
import TodoItem from "./components/TodoItem"; //Import komponen TodoItem
import Form from "./components/Form";

function App() {
  // State ini untuk menyimpan daftar todos. Defaultnya adalah array kosong.
  const [todos, setTodos] = useState(() => {
    const simpanTodos = localStorage.getItem("todos");
    return simpanTodos ? JSON.parse(simpanTodos) : [];
  });

  // State ini untuk menyimpan nilai dari input text.
  const [input, setInput] = useState("");

  //EFEK 1: Menyimpan todos ke localStorage setiap kali state "todos" berubah
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); //efek ini hanya berjalan jika 'todos' berubah

  const handleAddTodo = (e) => {
    // Mencegah form dari refresh halaman
    e.preventDefault();

    // Jangan tambahkan todo jika input kosong
    if (input.trim() === "") return;

    // Menambahkan todo baru ke dalam daftar todos
    // Kita menggunakan spread operator (...) untuk menyalin todos lama
    // dan menambahkan todo baru di akhir.
    setTodos([...todos, { id: Date.now(), text: input, isCompleted: false }]);

    // Mengosongkan kembali input field setelah submit
    setInput("");
  };

  const handleDeleteTodo = (id) => {
    // Filter todos, kembalikan semua todo kecuali yang id-nya cocok
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const contextValue = {
    handleDeleteTodo,
    handleAddTodo,
  };

  return (
    <>
      <TodoContext.Provider value={contextValue}>
        <Card>
          <h1>Daftar Isi Todo List</h1>
          <h2>Aplikasi Todo List Sederhana</h2>

          <Form input={input} setInput={setInput} />

          <ul className="todo-list">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </ul>
        </Card>
      </TodoContext.Provider>
    </>
  );
}

export default App;
