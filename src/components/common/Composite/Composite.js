import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Button, Modal } from "react-bootstrap"
import graphql from "gatsby"
import "./composite.scss"
const Composite = props => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const imageLocation = "../images/composites/RBFCU_Auto_Loans-1.png"
  const title = props.fileName

  return (
    <div>
      <div className="j-thumbnail">
        <StaticImage
          src={imageLocation}
          alt="black hex"
          loading="lazy"
          onClick={handleShow}
        />
      </div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal dialogClassName="j-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="j-modalBody">
          <StaticImage
            src={imageLocation}
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
  )
}

export default Composite
