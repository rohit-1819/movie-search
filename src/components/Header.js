import React, { useState } from 'react'
import Search from './Search'
const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (query) => {
    setSearchTerm(query);
    console.log('Searching for:', query);
    // You can now fetch data from an API using the query
  };
  return (
    <div>
      <h1>CineScope</h1>
      <Search onSearch={handleSearch}/>
    </div>
  )
}

export default Header
