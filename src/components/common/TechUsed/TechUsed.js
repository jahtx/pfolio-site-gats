import React from 'react'
import PropTypes from 'prop-types'
import TechMiniCard from '../TechMiniCard/TechMiniCard'
import '../../../styles/includeInAll/index.scss'
import { nanoid } from 'nanoid'

const TechUsed = ({ technologies }) => {
  return (
    <div className="miniCardSection">
      {technologies &&
        technologies.map(tech => {
          const id = nanoid()
          return (
            <div className="miniCardSection" key={id}>
              <TechMiniCard tech={tech} />
            </div>
          )
        })}
    </div>
  )
}

TechUsed.propTypes = {
  tech: PropTypes.object,
}

export default TechUsed
