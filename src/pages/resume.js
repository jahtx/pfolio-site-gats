import React from 'react'
import MainLayout from '../layouts/MainLayout/MainLayout'
import Container from 'react-bootstrap/Container'
import '../styles/resumePage.scss'

const ResumePage = () => {
  return (
    <MainLayout pageClasses="resumePage general">
      <Container fluid="sm">
        <h1>Résumé</h1>
        <hr></hr>
      </Container>
      <Container>
        <h2>Senior User Experience Designer / Front-end Developer</h2>
        <p>
          Intuitive developer and designer for mobile and desktop web
          applications. Application of new development tools, services, and
          methodologies. Dedicated team contributor and coordinator. Explores
          and analyzes industry best practices for user experience and front-end
          development. 10+ years of development experience and 6+ years of
          experience with direct-to-consumer products.
        </p>
        <h3>Core Strengths:</h3>
        <ul class="coreStrengths">
          <li>User Interface/User Experience Design</li>
          <li>Front-end Development with React and Angular</li>
          <li>Rapid prototyping</li>
          <li>Product Strategy and Planning</li>
        </ul>

        <h3>Professional Experience:</h3>
        <p>
          Designing and developing web application for managing promotions for
          the Air Force. Producing wireframes for prototypes and engineering.
          Incorporating user/client consultations and interviews to refine and
          adapt interface. Development for U.S. Department of Education Student
          Loan website, including designing and coding a variety of page flows
          to spec. Clients include{' '}
          <a href="https://www.accenture.com">Accenture</a>
          &nbsp;and&nbsp;
          <a href="https://www.diligent-us.com/">Diligent Consulting</a>.
        </p>
      </Container>
    </MainLayout>
  )
}

export default ResumePage
