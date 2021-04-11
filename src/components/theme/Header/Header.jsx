import React from "react"
import "./header.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// markup
const Header = () => {
  return (
    <div>
      <div className="container-fluid j-topBar"></div>

      <div className="container-fluid text-center mt-3">
        {" "}
        <Link to="/">
          <StaticImage
            src="../../../images/txflag.gif"
            alt="Texas Outline"
            width="50"
            placeholder="blurred"
          />
        </Link>
      </div>
    </div>
  )
}

export default Header
