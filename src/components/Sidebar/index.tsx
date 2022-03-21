import React from 'react';
import { useState } from 'react';

export default ({ children, onSearch }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <nav className="select-none bg-grey lg:flex lg:items-stretch w-full text-white p-3 bg-gray-900">
        <p>Yllet Explorer</p>
      </nav>
      <div className="border-r border-solid border-gray-400">
        <input
          type="search"
          placeholder="Find..."
          className="w-full p-3 placeholder-black bg-gray-200 border-b border-solid border-gray-400"
          onChange={(e) => onSearch && onSearch(e.target.value)}
        />
      </div>
      <div
        className={`relative border-r border-gray-400 border-solid text-gray-500h-screen ${
          collapsed ? 'w-16' : 'w-56'
        }`}
        style={{ backgroundColor: '#eaeaea' }}
      >
        {children}
      </div>
    </div>
  );
};
