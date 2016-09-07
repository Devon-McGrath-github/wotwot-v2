import React from 'react'
import {Link} from 'react-router'

export default (props) => {
  return (
    <div>
      <div className="nav_header">
        <img src="https://placeholdit.imgix.net/~text?txtsize=8&txt=60%C3%9760&w=60&h=60" alt="WotWot_logo" className="logo"></img>
        <h5 id="logo_text">WotWot</h5>
      </div>
      <div className="menu_simple">
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
          <li><a href="#">Link 5</a></li>
        </ul>
      </div>
    </div>
  )
}


// <div>
//   <Link to="/"><h4>WotWot (Nav Component)</h4></Link>
//   <Link to="/"><h4>PersonalitiesIndex</h4></Link>
//   <Link to="/"><h4>Placeholder</h4></Link>
//   <Link to="/"><h4>Placeholder</h4></Link>
// </div>
