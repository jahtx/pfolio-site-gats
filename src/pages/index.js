import React from "react"
// import { Link } from "gatsby"
import { Header, Footer, Navigation } from "../components/theme"
import "../styles/main.scss"

const IndexPage = () => {
  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>

      <div className="container-lg"></div>
      <Footer></Footer>
    </div>
  )
}

export default IndexPage

// Goal: The purpose of this page is to have an index.
//
// 1. What is the best way to architect this? If this page has <App>,
// where do I place the content?
