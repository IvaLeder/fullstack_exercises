import React from 'react'

export default function Entries ({ filtered, onDelete }) {
  return (
    <ul>
      {filtered.map(p => (
        <li key={p.id} style={{ listStyle: 'none' }}>
          <span>
            {p.name}: {p.number}
          </span>
          <button style={{ marginLeft: 20 }} onClick={() => onDelete(p)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}
