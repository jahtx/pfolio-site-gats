import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const AnthSectionRb = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        uxBack: file(relativePath: { eq: "backgrounds/stars.png" }) {
          childImageSharp {
            fluid(quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const uxBack = data.uxBack.childImageSharp.fluid

  return (
    <BackgroundImage tag="div" className={className} fluid={uxBack}>
      {children}
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(AnthSectionRb)`
  background-position: center;
  background-repeat: repeat;
  background-color: white;
  background-size: 200px;
`

export default StyledBackgroundSection
