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
    rgba(189, 189, 189, 1) 4%,
    rgba(240, 240, 240, 1) 86%
  );
  background-size: 500px;
  background-repeat: repeat;
  opacity: 0.1;
`

export default StyledBackgroundSection
