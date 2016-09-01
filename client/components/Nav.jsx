import React from 'react'
import {Link} from 'react-router'

export default (props) => {
  return (
    <div className="Nav-Main">
      <Link to="/"><h4>WotWot (Nav Component)</h4></Link>
      <Link to="/"><h4>PersonalitiesIndex</h4></Link>
      <Link to="/"><h4>Placeholder</h4></Link>
      <Link to="/"><h4>Placeholder</h4></Link>
    </div>
  )
}
