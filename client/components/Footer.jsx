import React from 'react'
import {Link} from 'react-router'

export default (props) => {
  return (
    <div>
      <div className="footer_simple">
        <ul>
          <h3>footer begins here</h3>
          <li><Link to="help">Help</Link></li>
          <li><Link to="feedback">Feedback</Link></li>
          <li><Link to="contact-us">Contact Us</Link></li>
          <li><Link to="logout">Logout</Link></li>
        </ul>
      </div>
    </div>
  )
}
