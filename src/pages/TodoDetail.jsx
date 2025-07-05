import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Card from '../components/UI/Card';
import { useTodoContext } from '../context/TodoContext';

const TodoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { todos, updateTodo, deleteTodo, toggleTodo } = useTodoContext();
  
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState('');
  const todo = todos.find(t => t.id === parseInt(id));
  if (!todo) {
    return (
      <Card className="max-w-xl mx-auto mt-10 p-8">
        <h1 className="text-2xl font-bold mb-2">😵 Todo Not Found</h1>
        <p className="mb-4">The todo you're looking for doesn't exist.</p>
        <Link to="/todos" className="btn btn-primary bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Back to Todos
        </Link>
      </Card>
    );
  }
  
  const handleEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };
  const handleSave = () => {
    if (editText.trim()) {
      updateTodo(todo.id, editText.trim());
      setIsEditing(false);
    }
  };
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      deleteTodo(todo.id);
      navigate('/todos');
    }
  };
  return (
    <div className="todo-detail flex justify-center mt-10">
      <Card className="w-full max-w-xl p-8 shadow-lg">
        <div className="breadcrumb text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:underline">Home</Link> / <Link to="/todos" className="hover:underline">Todos</Link> / <span className="font-semibold">{todo.text}</span>
        </div>
        <div className="todo-detail-header flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold flex items-center gap-2">📝 Todo Detail</h1>
          <span className={`status px-3 py-1 rounded text-xs font-semibold ${todo.isCompleted ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
            {todo.isCompleted ? '✅ Completed' : '🔥 Active'}
          </span>
        </div>
        <div className="todo-content mb-6">
          {isEditing ? (
            <div className="edit-form flex flex-col gap-2">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="edit-input border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                autoFocus
              />
              <div className="edit-actions flex gap-2">
                <button onClick={handleSave} className="btn btn-success bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  Save
                </button>
                <button onClick={() => setIsEditing(false)} className="btn btn-secondary bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="todo-text">
              <h2 className="text-xl font-semibold">{todo.text}</h2>
            </div>
          )}
        </div>
        <div className="todo-meta text-sm text-gray-600 mb-6">
          <p><strong>Created:</strong> {new Date(todo.createdAt).toLocaleString()}</p>
          <p><strong>Updated:</strong> {new Date(todo.updatedAt).toLocaleString()}</p>
        </div>
        <div className="todo-actions flex gap-2 mb-4">
          <button 
            onClick={() => toggleTodo(todo.id)}
            className={`btn px-4 py-2 rounded text-white ${todo.isCompleted ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-600 hover:bg-green-700'}`}
          >
            {todo.isCompleted ? 'Mark as Active' : 'Mark as Completed'}
          </button>
          
          {!isEditing && (
            <button onClick={handleEdit} className="btn btn-secondary bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
              Edit
            </button>
          )}
          
          <button onClick={handleDelete} className="btn btn-danger bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Delete
          </button>
        </div>
        <div className="navigation">
          <Link to="/todos" className="btn btn-outline border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100">
            ← Back to Todos
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default TodoDetail