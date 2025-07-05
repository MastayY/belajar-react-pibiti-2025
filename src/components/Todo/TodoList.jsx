import React from 'react'
import { useTodoContext } from '../../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const { todos } = props;

  if (!todos || todos.length === 0) {
    return <p className="text-center text-gray-500 mt-4">Kamu tidak punya todo</p>
  }

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">List Todo</h1>
      <ul className="bg-white rounded-lg shadow divide-y divide-gray-200">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList