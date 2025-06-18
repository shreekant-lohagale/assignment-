import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, darkMode }) => {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-800 text-white border-gray-600 placeholder-gray-300' : 'bg-white text-gray-900 border-gray-300 placeholder-gray-500'}`}
      />
    </div>
  );
};

export default SearchBar;
