import React from "react"
import Button from "react-bootstrap/Button"
import { Header, Footer, Navigation } from "../components/theme"
import "../styles/main.scss"

const ContactPage = () => {
  console.log("here")
  return (
    <div className="j-resume">
      <Header></Header>
      <Navigation></Navigation>
      <div className="container-sm">
        <Button>This</Button>
        <h1 className="j-mainHeader">Contact</h1>
      </div>
      <div className="container-sm j-headingBox">
        <div className="j-headingBox__firstSection"></div>
      </div>
      <div className="container-sm">
        <p>email: contact@jahtx.com</p>
        <p>phone: 210-649-7265</p>
        <p>twitter: @jah_uxdev</p>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ContactPage
