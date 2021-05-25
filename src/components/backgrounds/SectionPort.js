import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const SectionPort = ({ className, children }) => {
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

const StyledBackgroundSection = styled(SectionPort)`
  background-position: center;
  ${
    '' /* background: linear-gradient(
    0deg,
    rgba(171, 126, 26, 1) 2%,
    rgba(255, 190, 36, 1) 89%
  ); */
  }
  background-color: white;

  background-size: 500px;
  background-repeat: repeat-x;
  opacity: 0.1;
`

export default StyledBackgroundSection
