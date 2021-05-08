import React from 'react'
import MainLayout from '../layouts/MainLayout/MainLayout'
import TechMiniCard from '../components/common/TechMiniCard/TechMiniCard'
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
        Some of these are small projects to test, learn, and demonstrate new
        frameworks and tools. Of course, feel free to fork the project, ask
        questions, or provide feedback.
      </p>
      <div className="projectCard__top">
        <h2>Make a Postcard</h2>
      </div>
      <div className="projectCard__bottom">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <TechUsed
          technologies={['React', 'Redux', 'Gitlab', 'HTML5', 'CSS3', 'SASS']}
        ></TechUsed>
        <div className="miniCardSection">
          <TechMiniCard tech="React" />
          <TechMiniCard tech="Redux" />
          <TechMiniCard tech="Gitlab" />
          <TechMiniCard tech="HTML5" />
          <TechMiniCard tech="CSS3" />
          <TechMiniCard tech="SASS" />
        </div>
      </div>
    </div>
  </MainLayout>
)

export default ProjectsPage
