import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Search from './components/Search'
import AddEntry from './components/AddEntry'
import Entries from './components/Entries'

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
      <Search onFilter={filterByName} />
      <h2>add a new entry</h2>
      <AddEntry
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber} />
      <h2>Numbers</h2>
      <Entries filtered={filtered} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
