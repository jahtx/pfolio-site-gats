import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import './footer.scss'

// markup
const Footer = () => {
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
        star: file(relativePath: { eq: "footer/star.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  const beltStitch = data.beltStitch.childImageSharp.fluid
  const star = data.star.childImageSharp.fluid
  return (
    <BackgroundImage
      tag="div"
      className="container-fluid bottomBar"
      fluid={beltStitch}
    >
      <BackgroundImage
        tag="div"
        className="buckle"
        fluid={star}
      ></BackgroundImage>
    </BackgroundImage>
  )
}

export default Footer
