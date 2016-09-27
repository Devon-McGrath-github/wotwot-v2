import React from 'react'
import R from 'ramda'
import { Link } from 'react-router'

import SubNav from '../../containers/SubNavContainer'
import PersonalityCard from '../PersonalityCard'

export default (props) => {
  // turns object of objects into an array of objects
  const personalities = R.values(props.personalities)


  return (
    <div className="personalitiesIndex-container">
      <SubNav />
      <div className="personalities-list-container">
        <h2>PersonalitiesIndex component</h2>
        <div className="personalities-list">

          <div>
            {personalities.map(function (personality){
              {/* TODO: need to make this a component*/}
              return (
                <div key={personality.personalityId} className="personality-card">
                  <img src={personality.images}></img>
                  <h3>{personality.title}</h3>
                  <p>{personality.description}</p>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </div>
  )
}
