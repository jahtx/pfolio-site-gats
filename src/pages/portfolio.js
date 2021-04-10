import React from "react"
import Header from "../components/theme/Header/Header"
import Footer from "../components/theme/Footer/Footer"
import "../styles/main.scss"
import { StaticImage } from "gatsby-plugin-image"

const PortfolioPage = () => {
  return (
    <div>
      <Header></Header>
      <div className="container-lg j-common">
        Hello
        <br />
        <StaticImage
          src="../images/black-hex.jpeg"
          alt="black hex"
          loading="lazy"
        />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default PortfolioPage
