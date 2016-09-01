import React from 'react'
import {Link} from 'react-router'

export default (props) => {
  return (
    <div>
      <h2>WotWot (Nav Component)</h2>
      <ul>
        <li>something</li>
        <li>something 2</li>
        <li>something 2 3</li>
      </ul>
      <div className="TooBeModularized">
        <div className="ContentBlock1">
          <h2>Content Block</h2>
        </div>
        <div className="ContentBlock2">
          <h2>Content Block 2</h2>
        </div>
      </div>
    </div>
  )
}
