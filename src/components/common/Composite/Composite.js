import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import "./composite.scss"
const Composite = props => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
  }
  return (
    <div>
      <div
        className={
          props.mobile ? "portfolio__mobThumb" : "portfolio__deskThumb"
        }
        onClick={handleShow}
      >
        <GatsbyImage image={props.imageInfo} alt={props.title} />
      </div>
      <Modal
        dialogClassName={
          props.mobile ? "portfolio__modalMobile" : "portfolio__modalDesktop"
        }
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title className="portfolio__modalTitle">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="portfolio__modalBody">
          <GatsbyImage image={props.imageInfo} alt={props.title} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Composite

// Initial problems: GatsbyImage would not execute onClick when deployed.
// Solved by putting onClick on parent div. Who knows why this works?
