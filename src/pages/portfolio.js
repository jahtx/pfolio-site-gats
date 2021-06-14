import React from 'react'
import MainLayout from '../layouts/MainLayout/MainLayout'
import Container from 'react-bootstrap/Container'
import { Link } from 'gatsby'
import './portfolio.scss'

const PortfolioPage = () => {
  return (
    <MainLayout hideFooter>
      <Container fluid="lg">
        <h1 className="m-0 pt-4">Portfolio</h1>
        <hr className="m-0" />
      </Container>
      <Container className="mt-3 d-flex">
        <Link to="rbfcu" className="not-underline">
          <div
            className="hyperBox 
                    hyperBox--rbfcu 
                    text-white
                    flex-column
                    d-flex
                    justify-content-center
                    p-3
                    "
          >
            <h2 className="one-pt-1-rem mb-3">
              Randolph-Brooks Federal Credit Union
            </h2>
            <p className="pt-9-rem">
              This effort encompassed a full redesign of the credit union's main
              website as well as a thorough review of existing pages and their
              metrics, discussions of executive inititives and risks, and
              development of a comprehensive templating system.
            </p>
          </div>
        </Link>
      </Container>
    </MainLayout>
  )
}

export default PortfolioPage
