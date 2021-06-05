import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Container from 'react-bootstrap/Container'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import MainLayout from '../layouts/MainLayout/MainLayout'
import '../styles/portfolioPage.scss'
import Button from 'react-bootstrap/Button'
import { default as SectionRbfcuBk } from '../components/backgrounds/portfolio/rbfcuBk'

const PortfolioPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        rbfcuPhone: file(relativePath: { eq: "phone-with-rbfcu.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 240
              quality: 85
              placeholder: BLURRED
              formats: [WEBP]
              layout: FIXED

              transformOptions: { fit: OUTSIDE, cropFocus: CENTER }
            )
          }
        }
      }
    `
  )

  return (
    <MainLayout showVacMsg={false}>
      <SectionRbfcuBk>
        <Container fluid="lg text-white">
          <h1 className="m-0 pt-4">Portfolio</h1>
          <hr className="m-0 border-white" />
        </Container>
        <Container as="section" fluid="lg" className="p-4 d-flex exBox">
          <div className="exBox__part1 m-0 d-flex justify-content-center align-items-center">
            <div>
              {' '}
              <h2 className="one-pt-1-rem all-caps mt-3 mb-3 text-white">
                Randolph-Brooks Federal Credit Union
              </h2>
              <p className="pt-9-rem text-white">
                This effort encompassed a full redesign of a company’s primary
                website, including a thorough review of existing pages and their
                metrics, discussions of executive inititives and risks, and a
                development of a comprehensive templating system.
              </p>
              <div className="sect-btn2 w-100">
                <Button
                  size="sm"
                  variant="light"
                  href="/portfolio/rbfcu-portfolio"
                >
                  See More
                </Button>
              </div>
            </div>
          </div>
          <div className="exBox__part2 d-flex justify-content-center align-items-center">
            <GatsbyImage
              image={getImage(data.rbfcuPhone)}
              alt="RBFCU Portfolio"
              objectFit="contain"
            />
          </div>
        </Container>
      </SectionRbfcuBk>
    </MainLayout>
  )
}

export default PortfolioPage
