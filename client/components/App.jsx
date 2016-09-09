import React from 'react'

import Nav from '../containers/NavContainer'

export default (props) => (
  <div id="root-div">
    <div className="nav_container">
      <Nav />
    </div>
    <div className="content-container">
      {props.children}
    </div>
  </div>
)
