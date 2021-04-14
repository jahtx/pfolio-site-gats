import React from "react"
import "./header.scss"
import { Helmet } from "react-helmet"

// markup
const Header = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>James A. Hernandez | UX Designer and Front-end Developer</title>
      </Helmet>

      <div className="container-fluid j-topBar"></div>
    </div>
  )
}

export default Header
