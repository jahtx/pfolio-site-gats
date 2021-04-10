import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap"
//import Modal from "react-modal"
import Header from "../components/theme/Header/Header"
import Footer from "../components/theme/Footer/Footer"
import "../styles/main.scss"
import { StaticImage } from "gatsby-plugin-image"

const PortfolioPage = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div id="root">
      <Header></Header>
      <div className="container-lg j-common">
        <br />
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
        <br />
        <br />
        <StaticImage
          src="../images/black-hex.jpeg"
          alt="black hex"
          loading="lazy"
        />
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default PortfolioPage
