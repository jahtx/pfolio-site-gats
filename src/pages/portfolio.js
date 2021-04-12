import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Header, Footer } from "../components/theme"
import Composite from "../components/common/Composite/Composite"
import "../styles/main.scss"

const PortfolioPage = ({ data }) => {
  return (
    <div>
      <Header></Header>
      <p className="j-mainNav j-mainNav-portfolio">
        <Link to="/portfolio">Portfolio</Link> |&nbsp;
        <Link to="/resume">Résumé</Link>&nbsp;| Contact
      </p>
      <div className="container-sm">
        <h1 className="j-mainHeader">Portfolio</h1>
      </div>
      <div className="container-sm j-headingBox">
        <div className="j-headingBox__firstSection">
          <h2>Randolph-Brooks Federal Credit Union</h2>
        </div>
        <div className="j-headingBox__lastSection">
          <a href="http://rbfcu.org">
            <GatsbyImage
              image={getImage(data.rbfcuLogo.childImageSharp.gatsbyImageData)}
              alt="Randolph-Brooks logo"
              className="j-headingBox__logo"
              objectFit={"contain"}
            />
          </a>
        </div>
      </div>
      <div className="container-sm j-projectInset">
        <p>
          Randolph-Brooks Federal Credit Union is an accredited financial
          institution headquartered in Live Oak, Texas and is the second largest
          credit union in Texas.
        </p>
        <p>
          Their website had long been overdue for a refreshed design and needed
          to meet the expectations of a younger and more technologically
          demanding customer base.
        </p>
        <p>
          Challenges included accounting for over a thousand disparate pages and
          content, accessibility, and incorporating a new content management
          system. Over a period of nine months, James was instrumental in
          prioritizing product and services content, developing user research,
          and leading the front-end development effort.
        </p>
      </div>
      <div className="container-sm mt-3">
        <div className="d-flex justify-content-center">
          <h3 className="j-compHeading">Home Page</h3>
        </div>
        <div className="d-flex justify-content-center">
          <Composite
            title="Home Page Mobile"
            imageInfo={getImage(data.mainMobile)}
            mobile={true}
          />
          <Composite
            title="Home Page Desktop"
            imageInfo={getImage(data.mainDesktop)}
            mobile={false}
          />
        </div>
      </div>
      <div className="container-sm mt-3">
        <div className="d-flex justify-content-center">
          <h3 className="j-compHeading">Mortgages</h3>
        </div>
        <div className="d-flex justify-content-center">
          <Composite
            title="Mortgage Mobile"
            imageInfo={getImage(data.mortgageMobile)}
            mobile={true}
          />
          <Composite
            title="Mortgage Desktop"
            imageInfo={getImage(data.mortgageDesktop)}
            mobile={false}
          />
        </div>
      </div>
      <div className="container-sm mt-3">
        <div className="d-flex justify-content-center">
          <h3 className="j-compHeading">Checking</h3>
        </div>
        <div className="d-flex justify-content-center">
          <Composite
            title="Checking Mobile"
            imageInfo={getImage(data.checkingMobile)}
            mobile={true}
          />
          <Composite
            title="Checking Desktop"
            imageInfo={getImage(data.checkingDesktop)}
            mobile={false}
          />
        </div>
      </div>
      <div className="container-sm mt-3">
        <div className="d-flex justify-content-center">
          <h3 className="j-compHeading">Auto Loans</h3>
        </div>
        <div className="d-flex justify-content-center">
          <Composite
            title="Auto Loans Mobile"
            imageInfo={getImage(data.autoLoansMobile)}
            mobile={true}
          />
          <Composite
            title="Auto Loans Desktop"
            imageInfo={getImage(data.autoLoansDesktop)}
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
    rbfcuLogo: file(relativePath: { eq: "rbfcu-logo.png" }) {
      id
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [WEBP])
      }
    }
    mainMobile: file(relativePath: { eq: "composites/RBFCU_Main-1.png" }) {
      id
      childImageSharp {
        gatsbyImageData(
          quality: 85
          width: 270
          placeholder: BLURRED
          formats: [WEBP]
          layout: CONSTRAINED
        )
      }
    }
    mainDesktop: file(relativePath: { eq: "composites/RBFCU_Main-2.png" }) {
      id
      childImageSharp {
        gatsbyImageData(
          quality: 85
          width: 760
          placeholder: BLURRED
          formats: [WEBP]
          layout: CONSTRAINED
        )
      }
    }
    mortgageMobile: file(
      relativePath: { eq: "composites/RBFCU_Mortgage-1.png" }
    ) {
      id
      childImageSharp {
        gatsbyImageData(
          quality: 85
          width: 270
          placeholder: BLURRED
          formats: [WEBP]
          layout: CONSTRAINED
        )
      }
    }

    mortgageDesktop: file(
      relativePath: { eq: "composites/RBFCU_Mortgage-2.png" }
    ) {
      id
      childImageSharp {
        gatsbyImageData(
          quality: 85
          width: 760
          placeholder: BLURRED
          formats: [WEBP]
          layout: CONSTRAINED
        )
      }
    }
    autoLoansMobile: file(
      relativePath: { eq: "composites/RBFCU_Auto_Loans-1.png" }
    ) {
      id
      childImageSharp {
        gatsbyImageData(
          quality: 85
          width: 270
          placeholder: BLURRED
          formats: [WEBP]
          layout: CONSTRAINED
        )
      }
    }

    autoLoansDesktop: file(
      relativePath: { eq: "composites/RBFCU_Auto_Loans-2.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          quality: 85
          width: 760
          placeholder: BLURRED
          formats: [WEBP]
          layout: CONSTRAINED
        )
      }
    }
    checkingMobile: file(
      relativePath: { eq: "composites/RBFCU_Checking-1.png" }
    ) {
      id
      childImageSharp {
        gatsbyImageData(
          quality: 85
          width: 270
          placeholder: BLURRED
          formats: [WEBP]
          layout: CONSTRAINED
        )
      }
    }
    checkingDesktop: file(
      relativePath: { eq: "composites/RBFCU_Checking-2.png" }
    ) {
      id
      childImageSharp {
        gatsbyImageData(
          quality: 85
          width: 760
          placeholder: BLURRED
          formats: [WEBP]
          layout: CONSTRAINED
        )
      }
    }
  }
`

export default PortfolioPage
