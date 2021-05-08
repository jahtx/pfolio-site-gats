import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import MainLayout from '../layouts/MainLayout/MainLayout'
import TechUsed from '../components/common/TechUsed/TechUsed'
import Container from 'react-bootstrap/Container'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import '../styles/projectsPage.scss'

const ProjectsPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        postcardComp: file(relativePath: { eq: "postcard-comp.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              height: 200
              placeholder: BLURRED
              formats: [WEBP]
              layout: FIXED
            )
          }
        }
      }
    `
  )
  const postcardComp = data.postcardComp
  return (
    <MainLayout pageClasses="resumePage general">
      <Container fluid="sm">
        <h1 className="mainHeading">Projects</h1>
        <hr></hr>
      </Container>
      <div className="container-sm mb-5">
        <p>
          Many of these are small projects to test, learn, and demonstrate new
          frameworks and tools. All are welcome to download the code, ask me any
          questions, or provide feedback.
        </p>
        <div className="projectCard__top">
          <h2>Make a Postcard</h2>
        </div>
        <div className="projectCard__bottom">
          <div className="left">
            {' '}
            <p>
              This is a very small, simple app that asks the user to select a
              country, then creates a postcard with a custom image and message.
              It uses GraphQL to get a list of all countries and other data,
              then utlizes the SplashAPI to do an image search and pull down the
              first option. Fully responsive design utilizing Adobe vector art.
            </p>
            <p>
              {' '}
              <a href="https://countries-to-visit-zwzl3.ondigitalocean.app/">
                App Link
              </a>
              &nbsp;&nbsp;&nbsp;
              <a
                href="https://github.com/jahtx/countries-to-visit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Git Repo
              </a>
            </p>
            <TechUsed technologies={['React', 'GraphQL', 'Bootstrap']} />
          </div>
          <div className="right">
            <a
              href="https://countries-to-visit-zwzl3.ondigitalocean.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GatsbyImage
                className="postcardComp"
                image={getImage(postcardComp)}
                alt="Make A Postcard App"
              />
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default ProjectsPage
