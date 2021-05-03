import React from 'react'
import './header.scss'
import { Helmet } from 'react-helmet'

// markup
const Header = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Portfolio website for James A. Hernandez, UX Designer and Front-end Developer"
        />
        <title>James A. Hernandez | UX Designer and Front-end Developer</title>
      </Helmet>

      <div className="container-fluid cimaBar">
        <div className="cimaBar__item cimaBar--title">
          <a className="cimaBar__link" href="/">
            James A. Hernandez
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
