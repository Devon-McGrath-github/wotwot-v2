import React from 'react'

import Nav from '../containers/NavContainer'

export default (props) => (
  <div id="app-view">
    <Nav />
    {props.children}
  </div>
)
