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
        className={props.mobile ? "j-mobThumb" : "j-deskThumb"}
        onClick={handleShow}
      >
        <GatsbyImage image={props.imageInfo} alt={props.title} />
      </div>
      <Modal
        dialogClassName={props.mobile ? "j-modalMobile" : "j-modalDesktop"}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title className="j-modalTitle">{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="j-modalBody">
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
