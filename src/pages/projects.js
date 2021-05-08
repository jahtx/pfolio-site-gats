import React from 'react'
import MainLayout from '../layouts/MainLayout/MainLayout'
import TechUsed from '../components/common/TechUsed/TechUsed'
import Container from 'react-bootstrap/Container'
import '../styles/projectsPage.scss'

const ProjectsPage = () => (
  <MainLayout pageClasses="resumePage general">
    <Container fluid="sm">
      <h1 className="mainHeading">Projects</h1>
      <hr></hr>
    </Container>
    <div className="container-sm">
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
            country, then creates a postcard with a custom image and message. It
            uses GraphQL to get a list of all countries and other data, then
            utlizes the SplashAPI to do an image search and pull down the first
            option. Fully responsive design utilizing Adobe vector art.
          </p>
          <TechUsed technologies={['React', 'GraphQL', 'Bootstrap']} />
        </div>
        <div className="right">this</div>
      </div>
    </div>
  </MainLayout>
)

export default ProjectsPage
