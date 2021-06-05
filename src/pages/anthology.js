import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Container from 'react-bootstrap/Container'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import MainLayout from '../layouts/MainLayout/MainLayout'
import '../styles/anthologyPage.scss'
import Button from 'react-bootstrap/Button'
import { default as SectionAnthRbBackground } from '../components/backgrounds/AnthSectionRb'

const AnthologyPage = () => {
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
      <SectionAnthRbBackground>
        <Container as="section" fluid="lg" className="p-4 d-flex exBox">
          <div className="exBox__part1 m-0 d-flex justify-content-center align-items-center">
            <div>
              {' '}
              <h2 className="one-pt-1-rem all-caps mt-3 mb-3">
                Randolph-Brooks Federal Credit Union
              </h2>
              <p className="pt-9-rem">
                This effort encompassed a full redesign of a company’s primary
                website, including a thorough review of existing pages and their
                metrics, discussions of executive inititives and risks, and a
                development of a comprehensive templating system.
              </p>
              <div className="sect-btn2 w-100">
                <Button size="sm" variant="primary" href="/portfolio">
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
      </SectionAnthRbBackground>
    </MainLayout>
  )
}

export default AnthologyPage
