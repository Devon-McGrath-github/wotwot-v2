import React from 'react'
import { Link } from 'react-router'

import SubNav from '../containers/SubNavContainer'

export default (props) => {
  return (
    <div className="PersonalitiesIndex-container">
      <SubNav />
      <div className="Personalities-list-container">
        <h2>PersonalitiesIndex component</h2>
        <div className="Personalities-list">
          {/* these will be generated from the database */}
          <div className="Personality-card">
            <h3>Personality-card</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
