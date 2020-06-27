import React from 'react'
import './CTA.css'

const CTA = ({ value, stretch, start, center, end }) => {
  const classes = () => {
    if (stretch) {
      return 'stretch'
    } else if (start) {
      return 'alignStart'
    } else if (center) {
      return 'alignCenter'
    } else if (end) {
      return 'alignEnd'
    } else {
      return
    }
  }
  return <button className={`cta ${classes()}`}>{value}</button>
}

export default CTA
