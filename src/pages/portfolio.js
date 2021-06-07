import React from 'react'
import Container from 'react-bootstrap/Container'
import MainLayout from '../layouts/MainLayout/MainLayout'
import './portfolio.scss'
import Button from 'react-bootstrap/Button'
import { default as SectionRbfcuBk } from '../components/backgrounds/portfolio/ClientRbfcuBack'

const PortfolioPage = () => {
  return (
    <MainLayout showVacMsg={false}>
      <SectionRbfcuBk>
        <Container fluid="lg text-white">
          <h1 className="m-0 pt-4">Portfolio</h1>
          <hr className="m-0 border-grey" />
        </Container>
        <Container as="section" fluid="lg" className="p-4 d-flex exBox mb-5">
          <div className="exBox__part1 m-0 d-flex justify-content-center align-items-center">
            <div>
              {' '}
              <h2 className="one-pt-1-rem all-caps mt-3 mb-3 text-white">
                Randolph-Brooks Federal Credit Union
              </h2>
              <p className="pt-9-rem text-white">
                This effort encompassed a full redesign of a company’s primary
                website, including a thorough review of existing pages and their
                metrics, discussions of executive inititives and risks, and a
                development of a comprehensive templating system.
              </p>
              <div className="sect-btn2 w-100">
                <Button size="sm" variant="light" href="/portfolio/rbfcu">
                  See More
                </Button>
              </div>
            </div>
          </div>
          <div className="exBox__part2 d-flex justify-content-center align-items-center"></div>
        </Container>
      </SectionRbfcuBk>
    </MainLayout>
  )
}

export default PortfolioPage
