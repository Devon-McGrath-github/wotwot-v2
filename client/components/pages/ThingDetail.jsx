import React from 'react'

export default (props) => {
  if (props.thing) {
    return (
      <div>
        <h2>Thing Detail</h2>
      </div>
    )
  }
  return null
}
