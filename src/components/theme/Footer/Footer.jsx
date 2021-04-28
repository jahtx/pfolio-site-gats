import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import './footer.scss'

// markup
const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        beltStitch: file(relativePath: { eq: "belt-stitch.png" }) {
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
    <BackgroundImage
      tag="div"
      className="container-fluid bottomBar"
      fluid={beltStitch}
    >
      <div className="buckle"></div>
    </BackgroundImage>
  )
}

export default Footer
