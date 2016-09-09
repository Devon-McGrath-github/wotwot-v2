import React from 'react'
import {Link} from 'react-router'

import Footer from './Footer'

export default (props) => {
  return (
    <div id="nav_component">
      <div className="nav_header">
        <img src="https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60" alt="WotWot_logo" className="logo"></img>
        <h5 id="logo_text">WotWot</h5>
      </div>
      <div className="menu_simple">
        <ul>
          <h3>Analyze</h3>
          <li><Link to="/">Link 1</Link></li>
          <h3>Create</h3>
          <li><Link to="/">Link 1</Link></li>
          <h3>Manage</h3>
          <li><Link to="/">Link 1</Link></li>
          <li><Link to="/">Link 1</Link></li>
          <h3>Items</h3>
          <li><Link to="/">Link 1</Link></li>
          <li><Link to="/">Link 1</Link></li>
          <li><Link to="/">Link 1</Link></li>
        </ul>
      </div>

      <Footer />
    </div>
  )
}
