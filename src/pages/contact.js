import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import MainLayout from '../layouts/MainLayout/MainLayout'
import Container from 'react-bootstrap/Container'
import BackgroundImage from 'gatsby-background-image'
import './contact.scss'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { default as BoxesBackground } from '../components/backgrounds/boxes/BoxesBack'

const ContactPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        bizCard: file(relativePath: { eq: "backgrounds/business-card.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 800) {
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
  const bizCard = data.bizCard.childImageSharp.fluid
  const twitterLogo = data.twitterLogo
  const githubLogo = data.githubLogo
  const linkedinLogo = data.linkedinLogo
  return (
    <MainLayout pageClasses="contactPage general">
      <BoxesBackground>
        <Container fluid="sm">
          <h1 className="m-0 pt-4">Contact</h1>
          <hr className="m-0" />
          <p className="text-center contactNote mt-3">
            Email or call for full-time work or projects. 🙂
          </p>
          <BackgroundImage tag="div" className="bizCard" fluid={bizCard}>
            <p className="text-center pt-5">contact@jahtx.com</p>
            <p className="text-center">210-239-8460</p>
            <div className="text-center">
              <a
                href="https://twitter.com/jah_uxdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GatsbyImage
                  className="contactIcon"
                  image={getImage(twitterLogo)}
                  alt="Twitter Profile"
                />
              </a>
              <a
                href="https://github.com/jahtx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GatsbyImage
                  className="contactIcon"
                  image={getImage(githubLogo)}
                  alt="Github Profile"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/jameshernandez/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GatsbyImage
                  className="contactIcon"
                  image={getImage(linkedinLogo)}
                  alt="LinkedIn Profile"
                />
              </a>
            </div>
          </BackgroundImage>

          <div className="contactPage__spacer"></div>
        </Container>
      </BoxesBackground>
    </MainLayout>
  )
}

export default ContactPage
