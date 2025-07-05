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
      <Card>
        <h1>😵 Todo Not Found</h1>
        <p>The todo you're looking for doesn't exist.</p>
        <Link to="/todos" className="btn btn-primary">
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
    <div className="todo-detail">
      <Card>
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/todos">Todos</Link> / {todo.text}
        </div>
        <div className="todo-detail-header">
          <h1>📝 Todo Detail</h1>
          <span className={`status ${todo.isCompleted ? 'completed' : 'active'}`}>
            {todo.isCompleted ? '✅ Completed' : '🔥 Active'}
          </span>
        </div>
        <div className="todo-content">
          {isEditing ? (
            <div className="edit-form">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="edit-input"
                autoFocus
              />
              <div className="edit-actions">
                <button onClick={handleSave} className="btn btn-success">
                  Save
                </button>
                <button onClick={() => setIsEditing(false)} className="btn btn-secondary">
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="todo-text">
              <h2>{todo.text}</h2>
            </div>
          )}
        </div>
        <div className="todo-meta">
          <p><strong>Created:</strong> {new Date(todo.createdAt).toLocaleString()}</p>
          <p><strong>Updated:</strong> {new Date(todo.updatedAt).toLocaleString()}</p>
        </div>
        <div className="todo-actions">
          <button 
            onClick={() => toggleTodo(todo.id)}
            className={`btn ${todo.isCompleted ? 'btn-warning' : 'btn-success'}`}
          >
            {todo.isCompleted ? 'Mark as Active' : 'Mark as Completed'}
          </button>
          
          {!isEditing && (
            <button onClick={handleEdit} className="btn btn-secondary">
              Edit
            </button>
          )}
          
          <button onClick={handleDelete} className="btn btn-danger">
            Delete
          </button>
        </div>
        <div className="navigation">
          <Link to="/todos" className="btn btn-outline">
            ← Back to Todos
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default TodoDetail