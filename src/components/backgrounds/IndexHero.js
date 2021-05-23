import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const IndexHero = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        smallGrid: file(relativePath: { eq: "backgrounds/small-grid.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const smallGrid = data.smallGrid.childImageSharp.fluid

  return (
    <BackgroundImage tag="div" className={className} fluid={smallGrid}>
      {children}
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(IndexHero)`
  background-position: bottom;
  background: linear-gradient(
    0deg,
    rgba(0, 41, 115, 1) 0%,
    rgba(0, 84, 236, 1) 100%
  );
  background-size: 150px;
  background-repeat: repeat;
`

export default StyledBackgroundSection
