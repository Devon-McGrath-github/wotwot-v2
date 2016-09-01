import React from 'react'

export default (props) => {
  if (props.thing) {
    return (
      <div>
        <h2>Detail</h2>
        <p>{props.thing.id}: {props.thing.name}</p>
        <Link to="/">hide details</Link>
      </div>
    )
  }
  return null
}
