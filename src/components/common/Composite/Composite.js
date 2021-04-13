import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
// import Button from "react-bootstrap/Button"
// import Modal from "react-bootstrap/Modal"
import "./composite.scss"
const Composite = props => {
  // const [show, setShow] = useState(false)
  // const handleClose = () => setShow(false)
  // const handleShow = () => {
  //   setShow(true)
  //   console.log("help")
  // }

  const handleShow = () => {
    console.log("handleShow hit")
  }
  console.log("basic javascript working on page")

  return (
    <div>
      <div className={props.mobile ? "j-mobThumb" : "j-deskThumb"}>
        <GatsbyImage
          image={props.imageInfo}
          alt={props.title}
          onClick={handleShow}
        />
      </div>
      {/* <Modal
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
      </Modal> */}
    </div>
  )
}

export default Composite
