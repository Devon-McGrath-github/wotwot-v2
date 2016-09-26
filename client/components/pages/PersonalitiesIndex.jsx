import React from 'react'
import R from 'ramda'
import { Link } from 'react-router'

import SubNav from '../../containers/SubNavContainer'
import PersonalityCard from '../PersonalityCard'

export default (props) => {
  console.log('props.personalities', props.personalities)
  const personalities = R.values(props.personalities)
  console.log('personalities', personalities.map(function (personality){return (console.log('success'))}));
  console.log('array length', personalities.length);

  let personalityCards = []


  return (
    <div className="personalitiesIndex-container">
      <SubNav />
      <div className="personalities-list-container">
        <h2>PersonalitiesIndex component</h2>
        <div className="personalities-list">
          {/* these will be generated from the database */}
          <div>
          {personalities.map(function (personality){
            return (
              <p>{personality.title}</p>
            )
          })}
          </div>


        </div>
      </div>
    </div>
  )
}
