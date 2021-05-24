import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const SectionUX = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        uxBack: file(relativePath: { eq: "backgrounds/pattern.png" }) {
          childImageSharp {
            fluid(quality: 100) {
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

const StyledBackgroundSection = styled(SectionUX)`
  background-position: center;
  background: linear-gradient(
    0deg,
    rgba(3, 185, 59, 1) 0%,
    rgba(0, 133, 30, 1) 100%
  );

  ${
    '' /* background: linear-gradient(0deg, rgba(255,169,42,1) 2%, rgba(224,134,48,1) 85%); */
  }
  background-size: 500px;
  background-repeat: repeat-x;
  opacity: 0.1;
`

export default StyledBackgroundSection
