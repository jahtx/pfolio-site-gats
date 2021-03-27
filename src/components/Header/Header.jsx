import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import { Navbar } from "react-bootstrap"

// markup
const Header = () => {
  return (
    <div>
      <Navbar bg="dark">
        <Navbar.Brand href="#home">
          <div class="container-lg">
            <h1 style={{ color: `white`, fontSize: `36px` }}>
              James Hernandez
            </h1>
          </div>
        </Navbar.Brand>
      </Navbar>
    </div>
  )
}

export default Header
