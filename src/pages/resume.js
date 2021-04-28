import React from 'react'
import MainLayout from '../layouts/MainLayout/MainLayout'
import Container from 'react-bootstrap/Container'
import '../styles/resumePage.scss'

const ResumePage = () => (
  <MainLayout>
    <Container fluid="sm" className="resumePage general">
      <h1>Résumé</h1>
      <hr></hr>
    </Container>
  </MainLayout>
)

export default ResumePage
