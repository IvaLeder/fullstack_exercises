import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistic = ({ text, value }) => <tr><td>{text}: {value}</td></tr>

const Statistics = ({ good, neutral, bad }) => {
  if (good || neutral || bad) {
    return (
      <table>
        <tbody>
          <Statistic text='Good' value={good} />
          <Statistic text='Neutral' value={neutral} />
          <Statistic text='Bad' value={bad} />
          <Statistic text='All' value={good + neutral + bad} />
          <Statistic text='Average' value={(good - bad) / (good + neutral + bad)} />
          <Statistic text='Positive' value={(good / (good + neutral + bad)) + '%'} />
        </tbody>
      </table>
    )
  }
  return <p>No feedback given.</p>
}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Unicafe</h1>
      <h2>give feedback</h2>
      <Button onClick={() => setGood(good + 1)} text='Good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='Neutral' />
      <Button onClick={() => setBad(bad + 1)} text='Bad' />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
