import React from 'react'

export default function Entries ({ filtered }) {
  return (
    <ul>
      {filtered.map(p => (
        <li key={p.id}>
          {p.name}: {p.number}
        </li>
      ))}
    </ul>
  )
}
