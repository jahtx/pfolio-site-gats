import React from 'react'

import PropTypes from 'prop-types'
import './footer.scss'

// markup
const Footer = props => {
  return (
    <React.Fragment>
      {props.showVaccineMessage ? (
        <div className="vaccineAdvocacy pt-9-rem">
          <a
            href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/How-Do-I-Get-a-COVID-19-Vaccine.html"
            className="vaccineLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Where to get vaccinated for Covid-19
          </a>
        </div>
      ) : null}

      <p className="footerTrailer text-center mb-5">
        Built with <a href="https://reactjs.org/">React</a> and{' '}
        <a href="https://www.gatsbyjs.com/">Gatsby</a>.
      </p>
    </React.Fragment>
  )
}
Footer.propTypes = {
  showVaccineMessage: PropTypes.bool,
}
export default Footer
