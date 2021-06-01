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
              width: 270
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
          <div className="exBox__part1 m-0">
            <h2 className="one-pt-1-rem all-caps mt-3 mb-3">
              Randolph-Brooks Federal Credit Union
            </h2>
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
            <div className="sect-btn2 w-100">
              <Button size="sm" variant="primary" href="/portfolio">
                See More
              </Button>
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
