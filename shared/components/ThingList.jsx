import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  return (
    <div>
      <h2>List</h2>
      <ul>
        {props.things.map((thing) => {
          return (
            <li key={thing.id}>
              {thing.name} {' '}
              <Link to={`/details/${thing.id}`}>(show details)</Link>
            </li>
          )
        })}
      </ul>
      <a href="/" onClick={props.addThing}>Add random thing</a>
    </div>
  )
}
