import React from "react"
import Header from "../components/theme/Header/Header"
import Body from "../components/theme/Body/Body"
import Footer from "../components/theme/Footer/Footer"
import "../styles/main.scss"

// markup
const IndexPage = () => {
  return (
    <div>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  )
}

export default IndexPage

// Goal: The purpose of this page is to have an index.
//
// 1. What is the best way to architect this? If this page has <App>,
// where do I place the content?
