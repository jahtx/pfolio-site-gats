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
        workLogos: file(relativePath: { eq: "work-logos.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              placeholder: BLURRED
              formats: [WEBP]
              layout: FIXED
              height: 115
              transformOptions: { fit: OUTSIDE, cropFocus: CENTER }
            )
          }
        }
      }
    `
  )

  const spiral = data.spiral.childImageSharp.fluid
  const workLogos = data.workLogos.childImageSharp.gatsbyImageData

  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>
      <BackgroundImage tag="div" className="heroic" fluid={spiral}>
        <div className="container-sm">
          <h1 className="heroic__mainTitle">
            Hi, I'm James, a Product & Services UX Designer and{" "}
            <span className="no-break">Front-end</span> Engineer in the San
            Antonio area.
          </h1>
          <div className="heroic__inset">
            With over 10 years experience in design and development for
            established companies and organizations, I can be an excellent
            addition to your team or project! 🙂
          </div>
          <Container fluid="sm" className="heroic__prevEmp">
            <div className="heroic__prevEmp-left">
              Throughout my career I’ve worked on large efforts for Accenture,
              USAA, RBFCU, U.S. Air Force, and the Department of Education.
              While I’ve specialized in design research, wireframing, and
              development, I have also led teams for requirements gathering,
              user testing, and evaluation.
            </div>
            <div className="heroic__prevEmp-right">
              <GatsbyImage
                className="heroic__prevEmp-logos"
                image={getImage(workLogos)}
                alt="logos"
              />
            </div>
          </Container>
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
