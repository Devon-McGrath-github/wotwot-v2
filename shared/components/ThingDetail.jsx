import React from 'react'

import Nav from '../containers/NavContainer'

export default (props) => {
  if (props.thing) {
    return (
      <div>
        <Nav />
        <h2>Detail</h2>
        <p>{props.thing.id}: {props.thing.name}</p>
        <Link to="/">hide details</Link>
      </div>
    )
  }
  return null
}
