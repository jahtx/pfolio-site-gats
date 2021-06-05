import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import './rbfcuBk.scss'

const RbfcuBk = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        uxBack: file(relativePath: { eq: "backgrounds/big-star.png" }) {
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
    <div className="bkGradient">
      <BackgroundImage tag="div" className={className} fluid={uxBack}>
        {children}
      </BackgroundImage>
    </div>
  )
}

const StyledBackgroundSection = styled(RbfcuBk)`
  background-position: 0 0;
  background-color: #0e2e70;
  background-size: 630px;
  @media (min-width: 576px) {
    background-position: 25% 20%;
  }
`

export default StyledBackgroundSection
