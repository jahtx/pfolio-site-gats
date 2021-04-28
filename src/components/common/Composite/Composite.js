import React, { useState } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './composite.scss'
const Composite = props => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
  }

  return (
    <React.Fragment>
      <div
        className={props.mobile ? 'mobThumb' : 'deskThumb'}
        onClick={handleShow}
      >
        <GatsbyImage image={props.imageInfo} alt={props.title} />
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName={props.mobile ? 'modalMobile' : 'modalDesktop'}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modalTitle">{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <GatsbyImage image={props.imageInfo} alt={props.title} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}
Composite.propTypes = {
  mobile: PropTypes.bool,
}

export default Composite

// Initial problems: GatsbyImage would not execute onClick when deployed.
// Solved by putting onClick on parent div. Who knows why this works?
