import React from "react"
import { graphql } from "gatsby"

//import Modal from "react-modal"
import Header from "../components/theme/Header/Header"
import Footer from "../components/theme/Footer/Footer"
import Composite from "../components/common/Composite/Composite"
import "../styles/main.scss"

const PortfolioPage = ({ data }) => {
  console.log("from portfolio page: " + JSON.stringify(data.file.id))
  return (
    <div id="root">
      <Header></Header>
      <div className="container-lg">
        {/* <p>{data.site.siteMetadata.title}</p> */}
      </div>
      <Composite title={data.file.id} />
      <Footer></Footer>
    </div>
  )
}
export const query = graphql`
  query PortfolioQuery {
    file(relativePath: { eq: "comp.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 10) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default PortfolioPage
