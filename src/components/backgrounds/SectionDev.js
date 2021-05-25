import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const SectionDev = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        devBack: file(relativePath: { eq: "backgrounds/pattern.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const devBack = data.devBack.childImageSharp.fluid

  return (
    <BackgroundImage tag="div" className={className} fluid={devBack}>
      {children}
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(SectionDev)`
  background: linear-gradient(
    0deg,
    rgba(112, 112, 112, 1) 0%,
    rgba(75, 75, 75, 1) 86%
  );
  background-size: 500px;
  background-repeat: repeat-x;
  background-position: center;
`

export default StyledBackgroundSection
