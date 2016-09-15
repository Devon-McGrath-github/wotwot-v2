import React from 'react'

import SubNav from '../../containers/SubNavContainer'
import PersonalityCard from '../PersonalityCard'

export default (props) => {
  return (
    <div className="">
      <SubNav />
      <div className="campaign-content">
        <h1>Campaign Name Details</h1>
        <div className="Campaign-info">
          <h2>Campaign</h2>
          <input type="text" name="Campaign-Name" value="Campaign Name"/>
          <h2>Status</h2>
          <input type="text" name="Campaign-Status" value="Select Campaign Status"/>
          <h2>Personality</h2>
          <input type="text" name="Campaign-Personality" value="Select Personality"/>

          <div>
          <h2>Videos</h2>
          <button>Browse</button>
          <h2>Order</h2>
          <button >Add</button>
            <div>
              <PersonalityCard />
              <PersonalityCard />
              <PersonalityCard />
              <PersonalityCard />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
