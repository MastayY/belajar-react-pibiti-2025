import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-slate-700 text-white px-4 py-2 shadow-md">
      <div className="max-w-7xl w-full mx-auto py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          📝 TodoMaster
        </Link>
        <nav className="nav">
          <Link to="/" className="text-white px-2 py-4 rounded-md transition-all hover:bg-slate-900/10">Home</Link>
          <Link to="/todos" className="text-white px-2 py-4 rounded-md transition-all hover:bg-slate-900/10">All Todos</Link>
          <Link to="/todos/active" className="text-white px-2 py-4 rounded-md transition-all hover:bg-slate-900/10">Active</Link>
          <Link to="/todos/completed" className="text-white px-2 py-4 rounded-md transition-all hover:bg-slate-900/10">Completed</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header