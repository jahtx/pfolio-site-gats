import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { nanoid } from 'nanoid'
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

  const portItems = [
    {
      id: nanoid(),
      compHeader: 'Home Page',
      imageFileMobile: data.mainMobile,
      imageFileDesktop: data.mainDesktop,
    },
    {
      id: nanoid(),
      compHeader: 'Mortgages',
      imageFileMobile: data.mortgageMobile,
      imageFileDesktop: data.mortgageDesktop,
    },
    {
      id: nanoid(),
      compHeader: 'Checking',
      imageFileMobile: data.checkingMobile,
      imageFileDesktop: data.checkingDesktop,
    },
    {
      id: nanoid(),
      compHeader: 'Auto Loans',
      imageFileMobile: data.autoLoansMobile,
      imageFileDesktop: data.autoLoansDesktop,
    },
  ]

  return (
    <MainLayout pageClasses="portfolioPage" showVacMsg={false}>
      <div className="backgroundBoxesLeft">
        <div className="backgroundBoxesRight">
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

          {portItems &&
            portItems.map(portItem => {
              const {
                id,
                compHeader,
                imageFileMobile,
                imageFileDesktop,
              } = portItem
              return (
                <div className="container-lg mt-3" key={id}>
                  <h3 className="compHeading">{compHeader}</h3>

                  <div className="spiralBk d-flex justify-content-center">
                    <Composite
                      title="Mortgage Mobile"
                      imageInfo={getImage(imageFileMobile)}
                      isMobile
                    />
                    <Composite
                      title="Mortgage Desktop"
                      imageInfo={getImage(imageFileDesktop)}
                    />
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </MainLayout>
  )
}

export default PortfolioPage
