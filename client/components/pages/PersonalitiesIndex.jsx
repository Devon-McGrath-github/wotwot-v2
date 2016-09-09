import React from 'react'
import { Link } from 'react-router'

import SubNav from '../../containers/SubNavContainer'

export default (props) => {
  return (
    <div className="personalitiesIndex-container">
      <SubNav />
      <div className="personalities-list-container">
        <h2>PersonalitiesIndex component</h2>
        <div className="personalities-list">
          {/* these will be generated from the database */}
          <div className="personality-card">
            <h3>Personality-card 1</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          </div>
          <div className="personality-card">
            <h3>Personality-card 2</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          </div>
          <div className="personality-card">
            <h3>Personality-card 3</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          </div>
          <div className="personality-card">
            <h3>Personality-card 4</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          </div>
          <div className="personality-card">
            <h3>Personality-card 5</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          </div>
          <div className="personality-card">
            <h3>Personality-card 6</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
