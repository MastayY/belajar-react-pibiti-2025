import React, { useState, useEffect } from "react";
import "./style.css"; // Ini import css
import Home from "./pages/Home";
import Header from "./components/Layout/Header";
import { Route, Routes } from "react-router-dom";
import TodosPage from "./pages/TodosPage";
import { TodoProvider } from "./context/TodoContext";
import ActiveTodos from "./pages/ActiveTodos";
import ComnpletedTodos from "./pages/ComnpletedTodos";
import TodoDetail from "./pages/TodoDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <TodoProvider>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todos" element={<TodosPage />}/>
              <Route path="/todos/active" element={<ActiveTodos />} />
              <Route path="/todos/completed" element={<ComnpletedTodos />} />
              <Route path="/todos/:id" element={<TodoDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
