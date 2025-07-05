import React from 'react'
import Card from '../components/UI/Card'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not-found">
      <Card>
        <div className="error-content">
          <h1 className="error-code">404</h1>
          <h2>Page Not Found</h2>
          <p>Oops! The page you're looking for doesn't exist.</p>
          
          <div className="error-actions">
            <Link to="/" className="btn btn-primary">
              Go Home
            </Link>
            <Link to="/todos" className="btn btn-secondary">
              View Todos
            </Link>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default NotFound