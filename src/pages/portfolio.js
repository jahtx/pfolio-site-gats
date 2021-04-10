import React from "react"
import Header from "../components/theme/Header/Header"
import Footer from "../components/theme/Footer/Footer"
import "../styles/main.scss"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
// import Img from 'gastby-image'
const PortfolioPage = ({ data }) => {
  return (
    <div>
      <Header></Header>
      <div className="container-lg j-common">
        Hello
        <br />
        {/* <StaticImage src="../images/black-hex.jpeg" alt="black hex" /> */}
        <StaticImage fluid={data.blackHexGatsbyImage.childImageSharp.fluid} />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default PortfolioPage

export const query = graphql`
  query {
    blackHexGatsbyImage: file(relativePath: { eq: "black-hex.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
