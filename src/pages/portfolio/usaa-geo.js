import React from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import Container from 'react-bootstrap/Container'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import './usaa-geo.scss'

const USAAGeo = () => {
  return (
    <MainLayout>
      <Container fluid="lg">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/portfolio">Portfolio</Breadcrumb.Item>
          <Breadcrumb.Item active>USAA GeoEagle</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="m-0 pt-2">USAA GeoEagle</h1>
        <hr className="m-0" />
        <p className="mt-4 pt-9-rem">
          Randolph-Brooks Federal Credit Union is an accredited financial
          institution headquartered in Live Oak, Texas and is the second largest
          credit union in Texas.
        </p>
      </Container>
    </MainLayout>
  )
}
export default USAAGeo
