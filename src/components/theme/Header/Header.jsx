import React from 'react'
import './header.scss'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <header>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={data.site.siteMetadata?.description || `Description`}
        />
        <title>{data.site.siteMetadata?.title || `Title`}</title>
      </Helmet>

      <div className="cimaBar">
        <div className="cimaBar__item cimaBar--title">
          <a className="cimaBar__link" href="/">
            James A. Hernandez
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
