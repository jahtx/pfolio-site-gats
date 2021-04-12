import React from "react"
import { Header, Footer, Navigation } from "../components/theme"
import { Link } from "gatsby"
import "../styles/main.scss"

const ContactPage = () => {
  return (
    <div class="j-resume">
      <Header></Header>
      <Navigation></Navigation>
      <p>Contact me</p>
      <Footer></Footer>
    </div>
  )
}

export default ContactPage
