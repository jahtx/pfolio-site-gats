import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Button, Modal } from "react-bootstrap"
import "./composite.scss"
const Composite = props => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      <div className={props.mobile ? "j-mobThumb" : "j-deskThumb"}>
        <GatsbyImage
          image={props.imageInfo}
          alt={props.title}
          onClick={handleShow}
        />
      </div>
      <Modal
        dialogClassName={props.mobile ? "j-modalMobile" : "j-modalDesktop"}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
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
