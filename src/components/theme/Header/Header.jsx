import React from "react"
import "./header.scss"
import { Link } from "gatsby"

// markup
const Header = () => {
  return (
    <div>
      <div className="container-fluid j-topBar"></div>
      <Link to="/">
        {" "}
        <div className="container-fluid j-txSpacer"></div>
      </Link>
    </div>
  )
}

export default Header
