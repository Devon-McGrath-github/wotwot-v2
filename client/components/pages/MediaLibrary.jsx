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
            <p>{personality.what}</p>
          )
        })}
      </div>
    </div>
  )
}
