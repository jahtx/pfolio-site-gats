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
            fluid(quality: 90, maxWidth: 250) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        boxesBkRight: file(relativePath: { eq: "boxes-back-right.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 250) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        twitterLogo: file(
          relativePath: { eq: "contact-logos/twitter-logo.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              placeholder: BLURRED
              formats: [WEBP]
              height: 50
              transformOptions: { fit: CONTAIN, cropFocus: CENTER }
            )
          }
        }
        githubLogo: file(
          relativePath: { eq: "contact-logos/github-logo.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              placeholder: BLURRED
              formats: [WEBP]
              width: 50
              transformOptions: { fit: CONTAIN, cropFocus: CENTER }
            )
          }
        }
        linkedinLogo: file(
          relativePath: { eq: "contact-logos/linkedin-logo.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              placeholder: BLURRED
              formats: [WEBP]
              height: 50
              transformOptions: { fit: FILL, grayscale: false }
            )
          }
        }
      }
    `
  )

  const boxesBkLeft = data.boxesBkLeft.childImageSharp.fluid
  const boxesBkRight = data.boxesBkRight.childImageSharp.fluid
  const twitterLogo = data.twitterLogo
  const githubLogo = data.githubLogo
  const linkedinLogo = data.linkedinLogo
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
            <p className="text-center contactNote">
              Email or call for full-time work or projects.
            </p>
            <p className="text-center">contact@jahtx.com</p>
            <p className="text-center">210-239-8460</p>
            <div className="logoContainer">
              <a href="https://twitter.com/jah_uxdev">
                <GatsbyImage
                  className="contactIcon"
                  image={getImage(twitterLogo)}
                  alt="Twitter Profile"
                />
              </a>
              <a href="https://github.com/jahtx">
                <GatsbyImage
                  className="contactIcon"
                  image={getImage(githubLogo)}
                  alt="Github Profile"
                />
              </a>
              <a href="https://www.linkedin.com/in/jameshernandez/">
                <GatsbyImage
                  className="contactIcon"
                  image={getImage(linkedinLogo)}
                  alt="LinkedIn Profile"
                />
              </a>
            </div>

            <div className="contactPage__spacer"></div>
          </Container>
        </BackgroundImage>
      </BackgroundImage>
    </MainLayout>
  )
}

export default ContactPage
