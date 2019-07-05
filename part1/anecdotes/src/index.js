import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, addVote] = useState(Array(anecdotes.length).fill(0))
  const [popular, setPopular] = useState(0)

  const pickRandom = () => {
    const index = Math.floor(Math.random() * anecdotes.length)
    setSelected(index)
  }

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    addVote(newVotes)
    findMostPopular(newVotes)
  }

  const findMostPopular = (votes) => {
    const mostVotes = Math.max(...votes)
    const index = votes.findIndex(el => el === mostVotes)
    setPopular(index)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>Votes: {votes[selected]}</p>
      <button onClick={pickRandom}>Next anecdote</button>
      <button onClick={handleVote}>Vote</button>
      <h2>Anecdote with the most votes</h2>
      <p>{anecdotes[popular]}</p>
      <p>has {votes[popular]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
