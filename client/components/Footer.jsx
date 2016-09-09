import React from 'react'
import {Link} from 'react-router'

export default (props) => {
  return (
    <div>
      <div className="footer_simple">
        <ul>
          <h3>footer begins here</h3>
          <li><Link to="/">Help</Link></li>
          <li><Link to="/">Feedback</Link></li>
          <li><Link to="/">Contact Us</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </div>
    </div>
  )
}
