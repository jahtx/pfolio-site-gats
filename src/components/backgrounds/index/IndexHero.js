import React from 'react'
import './IndexHero.scss'

const IndexHero = ({ children }) => {
  return (
    <div className="indexHeroGradient">
      <div className="indexHeroBack">{children}</div>
    </div>
  )
}

export default IndexHero
