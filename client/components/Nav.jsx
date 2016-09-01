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
          <h2>Content Block titles and stuff</h2>
          <h3>inline</h3>
          <h3>content</h3>
        </div>
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
