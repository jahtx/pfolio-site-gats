import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { getImage } from 'gatsby-plugin-image'
import MainLayout from '../layouts/MainLayout/MainLayout'
import Container from 'react-bootstrap/Container'
import '../styles/contactPage.scss'

const ContactPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        boxesBkLeft: file(relativePath: { eq: "boxes-back-left.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        boxesBkRight: file(relativePath: { eq: "boxes-back-right.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const boxesBkLeft = data.boxesBkLeft.childImageSharp.fluid
  const boxesBkRight = data.boxesBkRight.childImageSharp.fluid
  return (
    <MainLayout pageClasses="contactPage general">
      <BackgroundImage tag="div" className="boxesBkLeft" fluid={boxesBkLeft}>
        <BackgroundImage
          tag="div"
          className="boxesBkRight"
          fluid={boxesBkRight}
        >
          <Container fluid="sm">
            <h1>Contact</h1>
            <hr></hr>
            <div className="contactPage__spacer"></div>
          </Container>
        </BackgroundImage>
      </BackgroundImage>
    </MainLayout>
  )
}

export default ContactPage
