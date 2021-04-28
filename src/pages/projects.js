import React from 'react'
import MainLayout from '../layouts/MainLayout/MainLayout'
import Container from 'react-bootstrap/Container'
import '../styles/projectsPage.scss'

const ProjectsPage = () => (
  <MainLayout pageClasses="resumePage general">
    <Container fluid="sm">
      <h1>Projects</h1>
      <hr></hr>
    </Container>
  </MainLayout>
)

export default ProjectsPage
