import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'

const IndexHero = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        background: file(relativePath: { eq: "backgrounds/blueprint3.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 3000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const background = data.background.childImageSharp.fluid

  return (
    <BackgroundImage tag="div" className="topHero" fluid={background}>
      {children}
    </BackgroundImage>
  )
}

export default IndexHero
