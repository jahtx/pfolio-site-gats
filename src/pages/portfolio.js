import React from 'react'
import MainLayout from '../layouts/MainLayout/MainLayout'
import Container from 'react-bootstrap/Container'
import './portfolio.scss'

const PortfolioPage = () => {
  return (
    <MainLayout hideFooter>
      <Container fluid="lg">
        <h1 className="m-0 pt-4">Portfolio</h1>
        <hr className="m-0" />
      </Container>
      <Container className="mt-3">
        <a href="portfolio/rbfcu" className="not-underline">
          <div
            className="hyperBox 
                    hyperBox--rbfcu 
                    text-white
                    flex-column
                    d-flex
                    justify-content-center 
                    "
          >
            <h2 className="one-pt-1-rem mb-3">
              Randolph-Brooks Federal Credit Union
            </h2>
            <p className="pt-9-rem">
              This effort encompassed a full redesign of a company’s primary
              website, including a thorough review of existing pages and their
              metrics, discussions of executive inititives and risks, and a
              development of a comprehensive templating system.
            </p>
          </div>
        </a>
      </Container>
    </MainLayout>
  )
}

export default PortfolioPage
