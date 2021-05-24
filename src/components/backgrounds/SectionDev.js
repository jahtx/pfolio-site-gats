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
  ${
    '' /* background: linear-gradient(
    0deg,
    rgba(185, 25, 3, 1) 0%,
    rgba(250, 145, 27, 1) 72%
  ); */
  }
  ${
    '' /* background: linear-gradient(180deg, rgba(207,118,18,1) 2%, rgba(255,142,34,1) 85%); */
  }
  background: linear-gradient(
    180deg,
    rgba(50, 50, 50, 1) 2%,
    rgba(93, 93, 93, 1) 85%
  );
  background-size: 500px;
  background-repeat: repeat-x;
  background-position: center;
`

export default StyledBackgroundSection
