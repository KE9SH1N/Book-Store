import React from 'react'

import './SectionHead.scss'

const SectionHead = (props) => {
  return (
    <div className="sectionheadText">
        <span>{props.textLine}</span>
    </div>
  )
}

export default SectionHead