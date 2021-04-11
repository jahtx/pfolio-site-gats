import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
//import Modal from "react-modal"
import Header from "../components/theme/Header/Header"
import Footer from "../components/theme/Footer/Footer"
import Composite from "../components/common/Composite/Composite"
import "../styles/main.scss"

const PortfolioPage = ({ data }) => {
  console.log(data)

  return (
    <div id="root">
      <Header></Header>
      <div className="container-lg">
        <Composite
          title="Checking Mobile"
          imageInfo={getImage(data.checkingMobile.childImageSharp)}
          altInfo="Checking Mobile"
          mobile={true}
        />
        <Composite
          title="Checking Desktop"
          imageInfo={getImage(data.checkingDesktop)}
          altInfo="Checking Desktop"
          mobile={false}
        />
      </div>
      <Footer></Footer>
    </div>
  )
}
export const query = graphql`
  query PortfolioQuery {
    autoLoansMobile: file(
      relativePath: { eq: "composites/RBFCU_Auto_Loans-1.png" }
    ) {
      id
      childImageSharp {
        gatsbyImageData(quality: 90)
      }
    }
    checkingMobile: file(
      relativePath: { eq: "composites/RBFCU_Checking-1.png" }
    ) {
      id
      childImageSharp {
        gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
      }
    }
    checkingDesktop: file(
      relativePath: { eq: "composites/RBFCU_Checking-2.png" }
    ) {
      id
      childImageSharp {
        gatsbyImageData(quality: 90, layout: CONSTRAINED)
      }
    }
  }
`

export default PortfolioPage
