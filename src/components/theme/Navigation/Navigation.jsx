import React from "react"
import "./navigation.scss"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <div>
      <p className="mainNav">
        <Link to="/portfolio">Portfolio</Link> |&nbsp;
        <Link to="/resume">Résumé</Link>&nbsp;|&nbsp;
        <Link to="/contact">Contact</Link>
      </p>
    </div>
  )
}

export default Navigation
