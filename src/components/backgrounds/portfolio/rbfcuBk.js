import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { respondTo } from './_respondTo'
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
    <BackgroundImage tag="div" className={className} fluid={uxBack}>
      {children}
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(RbfcuBk)`
    background-size: 300px;
    background-position: 0 0;
  @media screen and (min-width: 0) {
    background-size: 300px;
  background-color: #0e2e70;
  ${respondTo.sm`
  background-position: 25% 20%;
  background-color: blue;
  background-size: 300px;
  `}
`

export default StyledBackgroundSection
