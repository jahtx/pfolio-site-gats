import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import '../styles/portfolioPage.scss'
import Container from 'react-bootstrap/Container'
import BackgroundImage from 'gatsby-background-image'
import { getImage } from 'gatsby-plugin-image'
import { Header, Footer, Navigation } from '../components/theme'
import Composite from '../components/common/Composite/Composite'

const PortfolioPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        boxesBkLeft: file(relativePath: { eq: "boxes-back-left.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        boxesBkRight: file(relativePath: { eq: "boxes-back-right.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
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
  )

  const boxesBkLeft = data.boxesBkLeft.childImageSharp.fluid
  const boxesBkRight = data.boxesBkRight.childImageSharp.fluid
  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>
      <BackgroundImage tag="div" className="boxesBkLeft" fluid={boxesBkLeft}>
        <BackgroundImage
          tag="div"
          className="boxesBkRight"
          fluid={boxesBkRight}
        >
          <Container fluid="sm" className="portfolioPage general">
            <h1>Portfolio</h1>
            <hr></hr>

            <h2>Randolph-Brooks Federal Credit Union</h2>
            <p>
              Randolph-Brooks Federal Credit Union is an accredited financial
              institution headquartered in Live Oak, Texas and is the second
              largest credit union in Texas.
            </p>
            <p>
              Their website had long been overdue for a refreshed design and
              needed to meet the expectations of a younger and more
              technologically demanding customer base.
            </p>
            <p>
              Challenges included accounting for over a thousand disparate pages
              and content, accessibility, and incorporating a new content
              management system. Over a period of nine months, James was
              instrumental in prioritizing product and services content,
              developing user research, and leading the front-end development
              effort.
            </p>
          </Container>
          <div className="container-sm mt-3">
            <div className="d-flex justify-content-center">
              <h3 className="compHeading">Home Page</h3>
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
              <h3 className="compHeading">Mortgages</h3>
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
              <h3 className="compHeading">Checking</h3>
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
              <h3 className="compHeading">Auto Loans</h3>
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
        </BackgroundImage>
      </BackgroundImage>
      <Footer></Footer>
    </div>
  )
}

const StyledPortfolioPage = styled(PortfolioPage)`
  width: 90%;
`
export default StyledPortfolioPage
