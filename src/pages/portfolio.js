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
      <div className="container-sm mt-3">
        <div className="d-flex justify-content-center">
          <Composite
            title="Home Page Mobile"
            imageInfo={getImage(data.mainMobile)}
            altInfo="Home Page Mobile"
            mobile={true}
          />
          <Composite
            title="Home Page Desktop"
            imageInfo={getImage(data.mainDesktop)}
            altInfo="Home Page Desktop"
            mobile={false}
          />
        </div>
      </div>
      <div className="container-sm mt-3">
        <div className="d-flex justify-content-center">
          <Composite
            title="Checking Mobile"
            imageInfo={getImage(data.checkingMobile)}
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
      </div>
      <div className="container-sm mt-3">
        <div className="d-flex justify-content-center">
          <Composite
            title="Auto Loans Mobile"
            imageInfo={getImage(data.autoLoansMobile)}
            altInfo="Auto Loans Mobile"
            mobile={true}
          />
          <Composite
            title="Auto Loans Desktop"
            imageInfo={getImage(data.autoLoansDesktop)}
            altInfo="Auto Loans Desktop"
            mobile={false}
          />
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}
export const query = graphql`
  query PortfolioQuery {
    mainMobile: file(relativePath: { eq: "composites/RBFCU_Main-1.png" }) {
      id
      childImageSharp {
        gatsbyImageData(quality: 90, layout: CONSTRAINED)
      }
    }
    mainDesktop: file(relativePath: { eq: "composites/RBFCU_Main-2.png" }) {
      id
      childImageSharp {
        gatsbyImageData(quality: 90, layout: CONSTRAINED)
      }
    }
    autoLoansMobile: file(
      relativePath: { eq: "composites/RBFCU_Auto_Loans-1.png" }
    ) {
      id
      childImageSharp {
        gatsbyImageData(quality: 90, layout: CONSTRAINED)
      }
    }
    autoLoansDesktop: file(
      relativePath: { eq: "composites/RBFCU_Auto_Loans-2.png" }
    ) {
      id
      childImageSharp {
        gatsbyImageData(quality: 90, layout: CONSTRAINED)
      }
    }
    checkingMobile: file(
      relativePath: { eq: "composites/RBFCU_Checking-1.png" }
    ) {
      id
      childImageSharp {
        gatsbyImageData(quality: 90, layout: CONSTRAINED)
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
