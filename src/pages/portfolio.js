import React from "react"
import { Button } from "react-bootstrap"
import Modal from "react-modal"
import Header from "../components/theme/Header/Header"
import Footer from "../components/theme/Footer/Footer"
import "../styles/main.scss"
import { StaticImage } from "gatsby-plugin-image"

const PortfolioPage = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div id="root">
      <Header></Header>
      <div className="container-lg j-common">
        <br />
        <Button variant="primary" onClick={openModal}>
          Primary
        </Button>
        <br />
        <br />
        <StaticImage
          src="../images/black-hex.jpeg"
          alt="black hex"
          loading="lazy"
        />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="ExampleModal"
          ariaHideApp={false}
        >
          <div>here</div>
          <Button variant="primary" onClick={closeModal}>
            Close
          </Button>
        </Modal>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default PortfolioPage
