import React from 'react'
import {Link} from 'react-router'

import Footer from './Footer'

export default (props) => {
  return (
    <div id="nav_component">
      <div className="nav_header">
        <img src="https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60" alt="WotWot_logo" className="logo"></img>
        <Link to="/" id="logo_text"><h4>WotWot</h4></Link>
      </div>
      <div className="menu_simple">
        <ul>
          <h3>Analyze</h3>
          <li><Link to="dashboard">Dashboard</Link></li>
          <a href="/login.html" className="item"><p>Login</p></a>
          <h3>Create</h3>
          <li><Link to="campaign">Campaign</Link></li>
          <h3>Manage</h3>
          <li><Link to="user-accounts">User Accounts</Link></li>
          <li><Link to="media-library">Media Library</Link></li>
          <h3>Items</h3>
          <li><Link to="manufacturers">Manufacturers</Link></li>
          <li><Link to="products">Products</Link></li>
          <li><Link to="tags">Tags</Link></li>
          <li><Link to="personality">Personality</Link></li>
        </ul>
      </div>

      <Footer />
    </div>
  )
}
