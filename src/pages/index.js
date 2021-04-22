import React from "react"
// import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { Header, Footer, Navigation } from "../components/theme"
import "../styles/main.scss"
import BackgroundImage from "gatsby-background-image"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        blurredRoom: file(relativePath: { eq: "blurred-bk.jpg" }) {
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
      }
    `
  )

  const blurredBack = data.blurredRoom.childImageSharp.fluid
  const mainTable = data.mainTable.childImageSharp.fluid
  const edgeTable = data.edgeTable.childImageSharp.fluid
  const allLogos = data.allLogos.childImageSharp.fluid

  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>

      <BackgroundImage tag="div" className="herox__topBk" fluid={blurredBack}>
        <div className="container-sm">
          <h1 className="herox__mainTitle">
            Hi, I'm James, a Product & Services UX Designer and Front-end
            Engineer in the San Antonio area.
          </h1>
          <div className="herox__inset">
            With over 10 years experience in design and development for
            established companies and organizations, I can be an excellent
            addition to your team or project! 🙂
          </div>
        </div>
      </BackgroundImage>
      <BackgroundImage
        className="herox__mainTableBk"
        tag="div"
        fluid={mainTable}
      >
        <div className="herox__placecard">
          <BackgroundImage
            className="herox__allLogos"
            tag="div"
            fluid={allLogos}
          ></BackgroundImage>
        </div>
      </BackgroundImage>
      <BackgroundImage
        className="herox__edgeTableBk"
        tag="div"
        fluid={edgeTable}
      ></BackgroundImage>
      <div className="container-sm logos-caption">
        <p>
          I have worked on a variety of projects for several companies and
          organizations including Accenture, USAA, RBFCU, the Air Force, and the
          Department of Education. I've led and contributed to UX design cycles
          from start to finish, including initial research, user interviews and
          persona creation, surveys, usability testing, journey mapping, and
          design iterations.
        </p>
      </div>
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
