import React from "react"
// import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { Header, Navigation } from "../components/theme"
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
      }
    `
  )

  const blurredBack = data.blurredRoom.childImageSharp.fluid
  const mainTable = data.mainTable.childImageSharp.fluid
  const edgeTable = data.edgeTable.childImageSharp.fluid

  return (
    <section>
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
            established companies and organizations, I'm certain I can be an
            excellent addition to your team or project! 🙂
          </div>
        </div>
      </BackgroundImage>
      <BackgroundImage
        className="herox__mainTableBk"
        tag="div"
        fluid={mainTable}
      >
        <div className="herox__placecard">
          <img src="../../images/logos/usaa-logo.png" alt="usaa" />
        </div>
      </BackgroundImage>
      <BackgroundImage
        className="herox__edgeTableBk"
        tag="div"
        fluid={edgeTable}
      ></BackgroundImage>
    </section>
  )
}

const StyledIndexPage = styled(IndexPage)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledIndexPage

// Goal: The purpose of this page is to have an index.
//
// 1. What is the best way to architect this? If this page has <App>,
// where do I place the content?
