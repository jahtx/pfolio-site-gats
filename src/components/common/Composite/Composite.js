import React, { useState } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './composite.scss'

/**
 * A functional component with useState
 * Allows modal windows for diplaying full pictures of compositess
 *
 * @param {object} props - react props
 * @param {boolean} props.isMobile - if the comp is mobile or not
 */

const Composite = props => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
  }

  return (
    <React.Fragment>
      <div
        className={
          props.isMobile
            ? 'mobThumb overflow-hidden'
            : 'deskThumb overflow-hidden'
        }
        onClick={handleShow}
      >
        <GatsbyImage image={props.imageInfo} alt={props.title} />
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName={
          props.isMobile
            ? 'modalMobile overflow-hidden'
            : 'modalDesktop overflow-hidden'
        }
      >
        <Modal.Header closeButton>
          <Modal.Title className="one-pt-1-rem all-caps font-weight-bold">
            {props.title + ' ' + (props.isMobile ? 'mobile' : 'desktop')}
          </Modal.Title>
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
  isMobile: PropTypes.bool,
}

export default Composite
