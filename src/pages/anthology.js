import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Container from 'react-bootstrap/Container'
import { getImage } from 'gatsby-plugin-image'
import MainLayout from '../layouts/MainLayout/MainLayout'
import Composite from '../components/common/Composite/Composite'
import '../styles/anthologyPage.scss'

const AnthologyPage = () => {
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
      }
    `
  )

  return (
    <MainLayout showVacMsg={false}>
      <Container fluid="lg">
        <h1 className="m-0 pt-4">Portfolio</h1>
        <hr className="m-0" />
        <h2 className="one-pt-1-rem all-caps mt-3 mb-3">
          Randolph-Brooks Federal Credit Union
        </h2>
        <p className="pt-9-rem">
          Randolph-Brooks Federal Credit Union is an accredited financial
          institution headquartered in Live Oak, Texas and is the second largest
          credit union in Texas.
        </p>
        <p className="pt-9-rem">
          Their website had long been overdue for a refreshed design and needed
          to meet the expectations of a younger and more technologically
          demanding customer base.
        </p>
        <p className="pt-9-rem">
          Challenges included accounting for over a thousand disparate pages and
          content, accessibility, and incorporating a new content management
          system. Over a period of nine months, James was instrumental in
          prioritizing product and services content, developing user research,
          and leading the front-end development effort.
        </p>
      </Container>
    </MainLayout>
  )
}

export default AnthologyPage
