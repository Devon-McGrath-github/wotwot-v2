import React from 'react'
import { Link } from 'react-router'

import SubNav from '../../containers/SubNavContainer'
import PersonalityCard from '../PersonalityCard'

export default (props) => {
  return (
    <div className="personalitiesIndex-container">
      <SubNav />
      <div className="personalities-list-container">
        <h2>PersonalitiesIndex component</h2>
        <div className="personalities-list">
          {/* these will be generated from the database */}
          <PersonalityCard />
          <PersonalityCard />
          <PersonalityCard />
          <PersonalityCard />
          <PersonalityCard />
          <PersonalityCard />
        </div>
      </div>
    </div>
  )
}
