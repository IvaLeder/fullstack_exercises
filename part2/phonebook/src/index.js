import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Search from './components/Search'
import AddEntry from './components/AddEntry'
import Entries from './components/Entries'
import api from './services/api'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    api.getAll().then(response => {
      setPersons(response)
    })
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filtered, setFiltered] = useState([...persons])

  const handleSubmit = e => {
    e.preventDefault()
    const person = {
      name: newName,
      number: newNumber
    }
    const match = persons.find(el => el.name === newName)
    match
      ? updateNumber(match)
      : api
        .create(person)
        .then(response => setPersons(persons.concat(response)))
  }

  const handleNameChange = e => {
    setNewName(e.target.value)
  }

  const handleNumberChange = e => {
    setNewNumber(e.target.value)
  }

  const filterByName = query => {
    setFiltered(persons.filter(p => p.name.includes(query)))
  }

  const handleDelete = person => {
    if (window.confirm(`Really delete ${person.name}?`)) {
      api
        .remove(person)
        .then(response => setPersons(persons.filter(p => p.id !== person.id)))
    }
  }

  const updateNumber = person => {
    if (
      window.confirm(`${person.name} is already in a phonebook. Update number?`)
    ) {
      const data = { ...person, number: newNumber }
      api.update(person.id, data).then(response => {
        setPersons(persons.map(p => (response.id === p.id ? response : p)))
      })
    }
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
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Entries filtered={filtered} onDelete={handleDelete} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
