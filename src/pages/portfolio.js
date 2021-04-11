import React from "react"
import { graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
//import Modal from "react-modal"
import Header from "../components/theme/Header/Header"
import Footer from "../components/theme/Footer/Footer"
import Composite from "../components/common/Composite/Composite"
import "../styles/main.scss"

const PortfolioPage = ({ data }) => {
  // console.log(
  //   "from portfolio page: " + JSON.stringify(data.file.childImageSharp.fluid)
  // )

  // const bob = getImage(data.image.)
  return (
    <div id="root">
      <Header></Header>
      <div className="container-lg">
        <GatsbyImage
          image={getImage(data.image.childImageSharp.gatsbyImageData)}
          alt="spongebob"
        />
        {/* <p>{data.file.childImageSharp.fluid}</p> */}
        {/* <p>{data.site.siteMetadata.title}</p> */}
      </div>
      {/* <Composite title={data.file.id} /> */}
      <Footer></Footer>
    </div>
  )
}
export const query = graphql`
  query PortfolioQuery {
    image: file(relativePath: { eq: "bob.png" }) {
      id
      childImageSharp {
        gatsbyImageData(quality: 90, width: 400, layout: CONSTRAINED)
      }
    }
  }
`

export default PortfolioPage
