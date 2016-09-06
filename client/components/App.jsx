import React from 'react'

import Nav from '../containers/NavContainer'

export default (props) => (
  <div id="root-div">
    <Nav />
    {props.children}
  </div>
)
