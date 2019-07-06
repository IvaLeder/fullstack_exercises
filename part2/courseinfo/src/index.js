import React from 'react'
import ReactDOM from 'react-dom'

const Header = props =>
  <h1>{props.course}</h1>

const Part = props =>
  <li>{props.part.name} {props.part.exercises}</li>

const Content = ({ parts }) => (
  <ul>
    {parts.map(e => <Part part={e} />)}
  </ul>
)

const Course = props => (
  <section>
    <Header course={props.course.name}/>
    <Content parts={props.course.parts} />
  </section>
)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
