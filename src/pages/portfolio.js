import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Container from 'react-bootstrap/Container'
import { getImage } from 'gatsby-plugin-image'
import MainLayout from '../layouts/MainLayout/MainLayout'
import Composite from '../components/common/Composite/Composite'
import '../styles/portfolioPage.scss'

const PortfolioPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
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
  )

  return (
    <MainLayout pageClasses="portfolioPage" showVacMsg={false}>
      <div class="backgroundBoxesLeft">
        <div class="backgroundBoxesRight">
          <Container fluid="lg">
            <h1 className="mainHeading">Portfolio</h1>
            <hr></hr>

            <h2>Randolph-Brooks Federal Credit Union</h2>
            <p className="pt-9-rem">
              Randolph-Brooks Federal Credit Union is an accredited financial
              institution headquartered in Live Oak, Texas and is the second
              largest credit union in Texas.
            </p>
            <p className="pt-9-rem">
              Their website had long been overdue for a refreshed design and
              needed to meet the expectations of a younger and more
              technologically demanding customer base.
            </p>
            <p className="pt-9-rem">
              Challenges included accounting for over a thousand disparate pages
              and content, accessibility, and incorporating a new content
              management system. Over a period of nine months, James was
              instrumental in prioritizing product and services content,
              developing user research, and leading the front-end development
              effort.
            </p>
          </Container>
          <div className="container-lg mt-3">
            <div className="d-flex justify-content-center">
              <h3 className="compHeading">Home Page</h3>
            </div>
            <div className="d-flex justify-content-center">
              <Composite
                title="Home Page Mobile"
                imageInfo={getImage(data.mainMobile)}
                isMobile
              />
              <Composite
                title="Home Page Desktop"
                imageInfo={getImage(data.mainDesktop)}
              />
            </div>
          </div>
          <div className="container-lg mt-3">
            <div className="d-flex justify-content-center">
              <h3 className="compHeading">Mortgages</h3>
            </div>
            <div className="d-flex justify-content-center">
              <Composite
                title="Mortgage Mobile"
                imageInfo={getImage(data.mortgageMobile)}
                isMobile
              />
              <Composite
                title="Mortgage Desktop"
                imageInfo={getImage(data.mortgageDesktop)}
              />
            </div>
          </div>
          <div className="container-lg mt-3">
            <div className="d-flex justify-content-center">
              <h3 className="compHeading">Checking</h3>
            </div>
            <div className="d-flex justify-content-center">
              <Composite
                title="Checking Mobile"
                imageInfo={getImage(data.checkingMobile)}
                isMobile
              />
              <Composite
                title="Checking Desktop"
                imageInfo={getImage(data.checkingDesktop)}
              />
            </div>
          </div>
          <div className="container-lg mt-3 portLast">
            <div className="d-flex justify-content-center">
              <h3 className="compHeading">Auto Loans</h3>
            </div>
            <div className="d-flex justify-content-center">
              <Composite
                title="Auto Loans Mobile"
                imageInfo={getImage(data.autoLoansMobile)}
                isMobile={true}
              />
              <Composite
                title="Auto Loans Desktop"
                imageInfo={getImage(data.autoLoansDesktop)}
                isMobile={false}
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default PortfolioPage
