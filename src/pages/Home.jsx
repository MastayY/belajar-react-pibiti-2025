import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/UI/Card";
import { useTodoContext } from "../context/TodoContext";

const Home = () => {
  const { todos, activeTodos, completedTodos } = useTodoContext();
  return (
    <div className="home flex min-h-screen bg-gray-50 mt-8">
      <Card>
        <h1 className="text-3xl font-bold mb-2 flex items-center">
          <span role="img" aria-label="dart">🎯</span> Welcome to TodoMaster
        </h1>
        <p className="text-gray-600 mb-6">Your personal productivity companion</p>

        <div className="stats grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="stat-card bg-blue-100 rounded-lg p-4 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-blue-700">{todos.length}</h3>
            <p className="text-blue-700">Total Todos</p>
          </div>
          <div className="stat-card bg-yellow-100 rounded-lg p-4 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-yellow-700">{activeTodos.length}</h3>
            <p className="text-yellow-700">Active Todos</p>
          </div>
          <div className="stat-card bg-green-100 rounded-lg p-4 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-green-700">{completedTodos.length}</h3>
            <p className="text-green-700">Completed</p>
          </div>
        </div>
        <div className="quick-actions flex flex-col sm:flex-row gap-4">
          <Link
            to="/todos"
            className="btn btn-primary w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 text-center rounded transition"
          >
            View All Todos
          </Link>
          <Link
            to="/todos/active"
            className="btn btn-secondary w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-4 text-center rounded transition"
          >
            Active Todos
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
