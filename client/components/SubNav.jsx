import React from 'react'
import {Link} from 'react-router'

export default (props) => {
  return (
    <div className="nav-sub">
      <div className="nav-sub-content">
        <ul>
          <li><p className="nav-sub-header"></p></li>
          <li className="nav-sub-link"><Link to="/">Link 1</Link></li>
          <li className="nav-sub-link"><Link to="/">Link 2</Link></li>
          <li className="nav-sub-link">Link 3</li>
        </ul>
      </div>
    </div>
  )
}
