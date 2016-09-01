import React from 'react'
import {Link} from 'react-router'

export default (props) => {
  return (
    <div>
      <Link to="/"><h4>WotWot (Nav Component)</h4></Link>
      <Link to="/"><h4>PersonalitiesIndex</h4></Link>
      <Link to="/"><h4>Placeholder</h4></Link>
      <Link to="/"><h4>Placeholder</h4></Link>

      <div className="TooBeModularized">
        <div className="ContentBlock2">
          <h2>Content Block 2</h2>
          <div className="Personality-card">
            <h3>Personality-card</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
