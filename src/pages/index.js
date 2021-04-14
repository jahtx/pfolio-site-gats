import React from "react"
// import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { Header, Navigation } from "../components/theme"
import "../styles/main.scss"
import BackgroundImage from "gatsby-background-image"

const IndexPage = ({ iPadBackground }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "ipad.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid

  return (
    <section>
      <Header></Header>
      <Navigation></Navigation>
      <BackgroundImage
        Tag="section"
        className={iPadBackground}
        fluid={imageData}
        backgroundColor={`#040e18`}
      >
        <div className="homeHero">
          <div className="main__center">
            <div className="main__title">
              Product & Services UX Designer and&nbsp;
              <span className="no-break">Front-end</span>
              &nbsp;Engineer
            </div>
            <p className="main__syn">
              User interface strategy, prototyping, and research. Modern &nbsp;
              <span className="no-break">front-end</span> development using
              current frameworks and methodologies.
            </p>
          </div>
        </div>
      </BackgroundImage>
      {/* <Footer></Footer> */}
    </section>
  )
}

const StyledIndexPage = styled(IndexPage)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`
// const IndexPage = () => {
//   return (
//     <div>
//       <Header></Header>
//       <Navigation></Navigation>

//       <div className="container-lg"></div>
//       <Footer></Footer>
//     </div>
//   )
// }

export default StyledIndexPage

// Goal: The purpose of this page is to have an index.
//
// 1. What is the best way to architect this? If this page has <App>,
// where do I place the content?
