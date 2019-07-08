import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    persons.find(el => el.name === newName)
      ? window.alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat({ name: newName }))
  }

  const handleNameChange = e => {
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(p => (
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
