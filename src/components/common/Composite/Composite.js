import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Button, Modal } from "react-bootstrap"

const Composite = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal dialogClassName="j-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>RBFCU Auto Loans Page (Mobile)</Modal.Title>
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
  )
}

export default Composite
