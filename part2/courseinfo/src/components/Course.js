import React from 'react'

const Header = props => <h1>{props.course}</h1>

const Part = props => (
  <li>
    {props.part.name} {props.part.exercises}
  </li>
)

const Content = ({ parts }) => (
  <ul>
    {parts.map(e => (
      <Part key={e.id} part={e} />
    ))}
  </ul>
)

const Total = props => {
  const sum = props.parts.reduce((prev, curr) => prev + curr.exercises, 0)
  return <p>total of {sum}</p>
}

const Course = props => (
  <section>
    <Header course={props.course.name} />
    <Content parts={props.course.parts} />
    <Total parts={props.course.parts} />
  </section>
)

export default Course
