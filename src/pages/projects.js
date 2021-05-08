import React from 'react'
import MainLayout from '../layouts/MainLayout/MainLayout'
import TechMiniCard from '../components/common/TechMiniCard/TechMiniCard'
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
        <div className="miniCardSection">
          <TechMiniCard tech="Angular" />
          <TechMiniCard tech="AngularJS" />
          <TechMiniCard tech="RXJS" />
          <TechMiniCard tech="Bootstrap" />
          <TechMiniCard tech="React" />
          <TechMiniCard tech="Redux" />
          <TechMiniCard tech="Gitlab" />
          <TechMiniCard tech="JQuery" />
          <TechMiniCard tech="HTML5" />
          <TechMiniCard tech="CSS3" />
          <TechMiniCard tech="SASS" />
          <TechMiniCard tech="WordPress" />
          <TechMiniCard tech="Linux" />
          <TechMiniCard tech="JavaScript" />
        </div>
      </div>
    </div>
  </MainLayout>
)

export default ProjectsPage
