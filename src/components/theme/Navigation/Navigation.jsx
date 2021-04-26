import React from "react"
import "./navigation.scss"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const Navigation = () => {
  return (
    <Navbar className="greyNav" collapseOnSelect expand="sm">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="gacCollapse" id="responsive-navbar-nav">
        <Nav className="gac">
          <Nav.Link className="gacLink" href="/portfolio">
            Portfolio
          </Nav.Link>
          <Nav.Link className="gacLink" href="/projects">
            Projects
          </Nav.Link>
          <Nav.Link className="gacLink" href="/resume">
            Résumé
          </Nav.Link>
          <Nav.Link className="gacLink" href="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
