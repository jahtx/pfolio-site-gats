import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'
import './footer.scss'

// markup
const Footer = props => {
  const data = useStaticQuery(
    graphql`
      query {
        beltStitch: file(relativePath: { eq: "footer/belt-stitch.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 35) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  const beltStitch = data.beltStitch.childImageSharp.fluid

  return (
    <React.Fragment>
      {props.showVaccineMessage ? (
        <div className="vaccineAdvocacy">
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

      {/* <BackgroundImage
        tag="div"
        className="container-fluid bottomBar"
        fluid={beltStitch}
      ></BackgroundImage> */}
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
