import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import MainLayout from '../layouts/MainLayout/MainLayout'
import Container from 'react-bootstrap/Container'
import '../styles/contactPage.scss'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ContactPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
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

  const twitterLogo = data.twitterLogo
  const githubLogo = data.githubLogo
  const linkedinLogo = data.linkedinLogo
  return (
    <MainLayout pageClasses="contactPage general">
      <div class="backgroundBoxesLeft">
        <div class="backgroundBoxesRight">
          <Container fluid="sm">
            <h1 className="mainHeading">Contact</h1>
            <hr></hr>
            <p className="text-center contactNote">
              Email or call for full-time work or projects. 🙂
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
        </div>
      </div>
    </MainLayout>
  )
}

export default ContactPage
