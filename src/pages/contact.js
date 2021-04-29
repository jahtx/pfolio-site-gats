import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import MainLayout from '../layouts/MainLayout/MainLayout'
import BackgroundImage from 'gatsby-background-image'
import Container from 'react-bootstrap/Container'
import '../styles/contactPage.scss'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

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
        spongebob: file(
          relativePath: { eq: "contact-logos/twitter-logo.png" }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 85, placeholder: BLURRED, formats: [WEBP])
          }
        }
      }
    `
  )

  const boxesBkLeft = data.boxesBkLeft.childImageSharp.fluid
  const boxesBkRight = data.boxesBkRight.childImageSharp.fluid
  const spongebob = data.spongebob
  // const githubLogo = data.twitterLogo.childImageSharp.fluid
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
            <div className="logoContainer">
              <GatsbyImage image={getImage(spongebob)} alt="Twitter Account" />
            </div>

            <div className="contactPage__spacer"></div>
          </Container>
        </BackgroundImage>
      </BackgroundImage>
    </MainLayout>
  )
}

export default ContactPage
