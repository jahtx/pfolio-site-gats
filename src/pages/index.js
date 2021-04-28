import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { Header, Footer, Navigation } from "../components/theme"
import "../styles/indexPage.scss"
import BackgroundImage from "gatsby-background-image"
import Container from "react-bootstrap/Container"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        spiral: file(relativePath: { eq: "spiral-dim2.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        paintBox: file(relativePath: { eq: "paintbox.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
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
        uxLogos: file(relativePath: { eq: "ux-logos.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              placeholder: BLURRED
              formats: [WEBP]
              layout: FIXED
              height: 130
              transformOptions: { fit: OUTSIDE, cropFocus: CENTER }
            )
          }
        }
        devLogos: file(relativePath: { eq: "dev-logos.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              placeholder: BLURRED
              formats: [WEBP]
              layout: FIXED
              height: 130
              transformOptions: { fit: OUTSIDE, cropFocus: CENTER }
            )
          }
        }
      }
    `
  )

  const spiral = data.spiral.childImageSharp.fluid
  const paintBox = data.paintBox.childImageSharp.fluid
  const workLogos = data.workLogos.childImageSharp.gatsbyImageData
  const uxLogos = data.uxLogos.childImageSharp.gatsbyImageData
  const devLogos = data.devLogos.childImageSharp.gatsbyImageData

  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>
      <BackgroundImage tag="div" className="indexBk" fluid={spiral}>
        <div className="container-sm">
          <h1 className="indexBk__mainTitle">
            Hi, I'm James, a Product & Services UX Designer and{" "}
            <span className="no-break">Front-end</span> Engineer in the San
            Antonio area.
          </h1>
          <div className="indexBk__inset">
            With over 10 years experience in design and development for
            established companies and organizations, I can be an excellent
            addition to your team or project! 🙂
          </div>
          <Container fluid="sm" className="prevEmp">
            <div className="prevEmp-left">
              Throughout my career I’ve worked on large efforts for Accenture,
              USAA, RBFCU, U.S. Air Force, and the Department of Education.
              While I’ve specialized in design research, wireframing, and
              development, I have also led teams for requirements gathering,
              user testing, and evaluation.
            </div>
            <div className="prevEmp-right">
              <GatsbyImage
                image={getImage(workLogos)}
                alt="Previous Employers Logos"
              />
            </div>
          </Container>
          <BackgroundImage
            tag="div"
            className="explainBox explainBox--ux"
            fluid={paintBox}
          >
            <div className="explainBox__sectionPicture section--uxLeft">
              <GatsbyImage
                image={getImage(uxLogos)}
                alt="UX Tools and Applications"
              />
            </div>
            <div className="explainBox__section section--uxRight">
              <h3>Modern UX Methodology with Industry-leading Tools</h3>
              <p>Sketch, Figma, Invision, Adobe Illustrator, Adobe Photoshop</p>
            </div>
          </BackgroundImage>
          <div className="explainBox explainBox--dev">
            <div className="explainBox__sectionPicture section--devLeft">
              <GatsbyImage image={getImage(devLogos)} alt="Dev Tools" />
            </div>
            <div className="explainBox__section section--devRight">
              <h3>Programming Frameworks and Languages</h3>
              <p>React, Gastby, Angular, JQuery, Git, Bootstrap</p>
            </div>
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
