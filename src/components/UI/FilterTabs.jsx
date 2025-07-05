import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const FilterTabs = ({ currentFilter }) => {
  const filters = [
    { key: 'all', label: 'All', path: '/todos' },
    { key: 'active', label: 'Active', path: '/todos?filter=active' },
    { key: 'completed', label: 'Completed', path: '/todos?filter=completed' }
  ];
  return (
    <div className="flex space-x-2 mb-4">
      {filters.map(filter => (
        <Link
          key={filter.key}
          to={filter.path}
          className={`px-4 py-2 rounded transition-colors duration-200
            ${currentFilter === filter.key
              ? 'bg-blue-600 text-white font-semibold'
              : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
            }`
          }
        >
          {filter.label}
        </Link>
      ))}
    </div>
  );
}

export default FilterTabs