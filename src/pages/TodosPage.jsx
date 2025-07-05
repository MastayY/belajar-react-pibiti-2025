import React from "react";
import { useTodoContext } from "../context/TodoContext";
import Card from "../components/UI/Card";
import TodoForm from "../components/Todo/TodoForm";
import TodoList from "../components/Todo/TodoList";
import { useSearchParams } from "react-router-dom";
import FilterTabs from "../components/UI/FilterTabs";

const TodosPage = () => {
  const { todos, activeTodos, completedTodos } = useTodoContext();
  const [searchParams] = useSearchParams();

  const filter = searchParams.get("filter") || "all";

  const getFilteredTodos = () => {
    switch (filter) {
      case "active":
        return activeTodos;
      case "completed":
        return completedTodos;
      default:
        return todos;
    }
  };
  const filteredTodos = getFilteredTodos();

  return (
    <div className="todos-page flex justify-center items-start min-h-screen bg-gray-100 py-8">
      <Card className="w-full max-w-xl shadow-lg">
        <h1 className="py-3 px-4 text-4xl font-bold rounded-t-md">📋 Todos</h1>
        <div className="p-4 space-y-4">
          <TodoForm />
          <FilterTabs currentFilter={filter} />
          <TodoList todos={filteredTodos} />

          {filteredTodos.length === 0 && (
            <div className="empty-state text-center py-8 text-gray-500">
              <p>No todos found for "{filter}" filter.</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default TodosPage;
