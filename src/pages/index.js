import React from "react"
// import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { Header, Footer, Navigation } from "../components/theme"
import "../styles/indexPage.scss"
import BackgroundImage from "gatsby-background-image"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        spiral: file(relativePath: { eq: "spiral-dim.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        mainTable: file(relativePath: { eq: "main-table.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        edgeTable: file(relativePath: { eq: "edge-table.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        allLogos: file(relativePath: { eq: "logos/all-logos.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        brushes: file(relativePath: { eq: "brushes.png" }) {
          id
          childImageSharp {
            gatsbyImageData(
              quality: 85
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        laptop: file(relativePath: { eq: "laptop.png" }) {
          id
          childImageSharp {
            gatsbyImageData(
              quality: 85
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
      }
    `
  )

  const spiral = data.spiral.childImageSharp.fluid

  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>
      <BackgroundImage tag="div" className="heroic" fluid={spiral}>
        <div className="container-sm">
          <h1 className="heroic__mainTitle">
            Hi, I'm James, a Product & Services UX Designer and Front-end
            Engineer in the San Antonio area.
          </h1>
          <div className="heroic__inset">
            With over 10 years experience in design and development for
            established companies and organizations, I can be an excellent
            addition to your team or project! 🙂
          </div>
        </div>
      </BackgroundImage>
      <Footer></Footer>
    </div>
  )
}

const StyledIndexPage = styled(IndexPage)`
  width: 100%;
`

export default StyledIndexPage

// Goal: The purpose of this page is to have an index.
//
// 1. What is the best way to architect this? If this page has <App>,
// where do I place the content?
