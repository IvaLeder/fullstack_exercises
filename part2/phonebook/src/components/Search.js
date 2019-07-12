import React, { useEffect, useState } from 'react'

const Search = ({ onFilter }) => {
  const [query, setQuery] = useState('')

  const handleQuery = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    onFilter(query)
  })

  return (
    <div>
      Filter by name: <input
        type='search'
        value={query}
        onChange={handleQuery}
      />
    </div>
  )
}

export default Search
