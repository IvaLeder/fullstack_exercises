import React from 'react'
import Part from './Part'

export default function Content (props) {
  return (
    <div>
      <Part {...props.parts[0]} />
      <Part {...props.parts[1]} />
      <Part {...props.parts[2]} />
    </div>
  )
}
