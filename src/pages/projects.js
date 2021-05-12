import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import MainLayout from '../layouts/MainLayout/MainLayout'
import TechUsed from '../components/common/TechUsed/TechUsed'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
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
        <h1 className="m-0 pt-4">Projects</h1>
        <hr></hr>
      </Container>
      <Container fluid="sm" className="mb-5">
        <p>
          Many of these are small projects to test, learn, and demonstrate new
          frameworks and tools. All are welcome to download the code, ask me any
          questions, or provide feedback.
        </p>
        <div className="duoRoundBox__top mt-4">
          <h2 className="m-0 font-weight-bold">Make a Postcard</h2>
        </div>
        <div className="duoRoundBox__bottom pb-4 d-flex flex-column">
          <div className="d-flex flex-row">
            <div className="p-1">
              <p className="pt-9-rem mt-3">
                This is a very small, simple app that asks the user to select a
                country, then creates a postcard with a custom image and
                message. It uses GraphQL to get a list of all countries and
                other data, then incorporates the SplashAPI to do an image
                search and pull down the first option. Fully responsive design
                utilizing Adobe vector art.
              </p>
              <TechUsed technologies={['React', 'GraphQL', 'Bootstrap']} />
            </div>
            <div className="p-2">
              <a
                href="https://countries-to-visit-zwzl3.ondigitalocean.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GatsbyImage
                  className="postcardComp overflow-hidden"
                  image={getImage(postcardComp)}
                  alt="Make A Postcard App"
                />
              </a>
            </div>
          </div>
          <div>
            <Button
              variant="outline-primary mr-3"
              href="https://countries-to-visit-zwzl3.ondigitalocean.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to App
            </Button>
            <Button
              variant="outline-primary"
              href="https://github.com/jahtx/countries-to-visit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Git Repo
            </Button>
          </div>
        </div>
      </Container>
    </MainLayout>
  )
}

export default ProjectsPage
