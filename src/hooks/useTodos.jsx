import { useEffect, useState } from "react";

const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      isCompleted: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setTodos(prev => [...prev, newTodo]);
  };
  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };
  const toggleTodo = (id) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id 
          ? { ...todo, isCompleted: !todo.isCompleted, updatedAt: new Date().toISOString() }
          : todo
      )
    );
  };
  const updateTodo = (id, newText) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id 
          ? { ...todo, text: newText, updatedAt: new Date().toISOString() }
          : todo
      )
    );
  };
  // Computed values
  const activeTodos = todos.filter(todo => !todo.isCompleted);
  const completedTodos = todos.filter(todo => todo.isCompleted);
  return {
    todos,
    activeTodos,
    completedTodos,
    addTodo,
    deleteTodo,
    toggleTodo,
    updateTodo
  };
}

export default useTodos