import React from 'react'
import {Link} from 'react-router'

export default (props) => {
  return (
    <div className="nav_container">
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
