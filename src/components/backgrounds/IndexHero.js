import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const IndexHero = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        background: file(
          relativePath: { eq: "backgrounds/blueprint-trans.png" }
        ) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const background = data.background.childImageSharp.fluid

  return (
    <BackgroundImage tag="div" className={className} fluid={background}>
      {children}
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(IndexHero)`
  background-position: bottom;
  background-color: #0054ec;
  background-size: cover;
`

export default StyledBackgroundSection
