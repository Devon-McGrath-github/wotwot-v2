import React from 'react'
import R from 'ramda'

import SubNav from '../../containers/SubNavContainer'

export default (props) => {

  const personalities = R.values(props.personalities)

  return (
    <div className="MediaLibrary-content">
      <SubNav />
      <div className="mediaLibrary-content">
        <h1>Media Library</h1>
        {personalities.map(function (personality) {
          return (
            <div>
              <p>-------------------</p>
              <h2>{personality.title}</h2>
              <h3>{personality.subtitle}</h3>
              <div className="personality-image">
                <img src={personality.images}/>
              </div>
              <div className="personality-video">
                <p>{personality.videos}</p>
              </div>
              <p>{personality.audio}</p>

              <p>{personality.description}</p>
              <p>-------------------</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
