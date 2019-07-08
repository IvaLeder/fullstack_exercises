import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const Filter = ({ onFilter }) => {
  const [query, setQuery] = useState('')

  const handleQuery = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    onFilter(query)
  })

  return (
    <div>
      Filter by name:
      <input
        type='search'
        value={query}
        onChange={handleQuery}
      />
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filtered, setFiltered] = useState([...persons])

  const handleSubmit = e => {
    e.preventDefault()
    persons.find(el => el.name === newName)
      ? window.alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat({ name: newName, number: newNumber }))
  }

  const handleNameChange = e => {
    setNewName(e.target.value)
  }

  const handleNumberChange = e => {
    setNewNumber(e.target.value)
  }

  const filterByName = (query) => {
    setFiltered(persons.filter(p => p.name.includes(query)))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onFilter={filterByName} />
      <h2>add a new entry</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filtered.map(p => (
          <li key={p.name}>
            {p.name}: {p.number}{' '}
          </li>
        ))}
      </ul>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
