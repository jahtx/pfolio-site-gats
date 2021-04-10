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
        <Modal dialogClassName="j-modal" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body className="j-modalBody">
            <StaticImage
              src="../images/composites/RBFCU_Auto_Loans-1.png"
              alt="black hex"
              loading="lazy"
              width={200}
            />
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
