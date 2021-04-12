import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Header, Footer } from "../components/theme"
import Composite from "../components/common/Composite/Composite"
import "../styles/main.scss"

const PortfolioPage = ({ data }) => {
  return (
    <div>
      <Header></Header>
      <div className="container-sm j-headingBox">
        <div className="j-headingBox__firstSection">
          <h2>Randolph-Brooks Federal Credit Union</h2>
        </div>
        <div className="j-headingBox__lastSection">
          <GatsbyImage
            image={getImage(data.rbfcuLogo.childImageSharp)}
            alt="Randolph-Brooks logo"
            className="j-headingBox__logo"
            objectFit={"contain"}
          />
        </div>
      </div>
      <div className="container-sm j-projectInset">
        <p>
          Randolph-Brooks Federal Credit Union is an accredited financial
          institution headquartered in Live Oak, Texas and is the second largest
          credit union in Texas.
        </p>
        <p>
          Its website had long been overdue for a design refresh and to meet the
          expectations of a younger and more technically demanding customer
          base.
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
          <h2 className="j-compHeading">Home Page</h2>
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
          <h2 className="j-compHeading">Mortgages</h2>
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
          <h2 className="j-compHeading">Checking</h2>
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
          <h2 className="j-compHeading">Auto Loans</h2>
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
        gatsbyImageData(formats: [WEBP])
      }
    }
    mainMobile: file(relativePath: { eq: "composites/RBFCU_Main-1.png" }) {
      id
      childImageSharp {
        gatsbyImageData(
          quality: 80
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
          quality: 80
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
          quality: 80
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
          quality: 80
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
          quality: 80
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
          quality: 80
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
          quality: 80
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
          quality: 80
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
