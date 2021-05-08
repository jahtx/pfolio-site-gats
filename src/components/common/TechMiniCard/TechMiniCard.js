import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import './techminicard.scss'
// import { techListData } from '../../../data/techList'

/**
 *
 * @param {object} props - react props
 * @param {object} tech - string
 */

const TechMiniCard = ({ tech }) => {
  const data = useStaticQuery(
    graphql`
      query {
        angLogo: file(relativePath: { eq: "dev-logos/ang-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 30
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        angjsLogo: file(relativePath: { eq: "dev-logos/angjs-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 34
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        rxjsLogo: file(relativePath: { eq: "dev-logos/rxjs-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 30
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        bootstrapLogo: file(
          relativePath: { eq: "dev-logos/bootstrap-logo.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 32
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        reactLogo: file(relativePath: { eq: "dev-logos/react-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 32
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        reduxLogo: file(relativePath: { eq: "dev-logos/redux-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 32
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        gitlabLogo: file(relativePath: { eq: "dev-logos/gitlab-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 32
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        jqueryLogo: file(relativePath: { eq: "dev-logos/jquery-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 31
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        html5Logo: file(relativePath: { eq: "dev-logos/html5-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 31
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        css3Logo: file(relativePath: { eq: "dev-logos/css3-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 27
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        sassLogo: file(relativePath: { eq: "dev-logos/sass-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 31
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        jsLogo: file(relativePath: { eq: "dev-logos/js-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 31
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        wpLogo: file(relativePath: { eq: "dev-logos/wordpress-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 31
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        linuxLogo: file(relativePath: { eq: "dev-logos/linux-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 27
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        whammyDude: file(relativePath: { eq: "whammy.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 33
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
      }
    `
  )
  const angLogo = data.angLogo
  const angjsLogo = data.angjsLogo
  const rxjsLogo = data.rxjsLogo
  const bootstrapLogo = data.bootstrapLogo
  const reactLogo = data.reactLogo
  const reduxLogo = data.reduxLogo
  const gitlabLogo = data.gitlabLogo
  const jqueryLogo = data.jqueryLogo
  const html5Logo = data.html5Logo
  const css3Logo = data.css3Logo
  const sassLogo = data.sassLogo
  const wpLogo = data.wpLogo
  const linuxLogo = data.linuxLogo
  const jsLogo = data.jsLogo
  const whammyDude = data.whammyDude

  const renderSwitch = param => {
    switch (param) {
      case 'Angular':
        return {
          image: angLogo,
          weblink: 'https://angular.io/',
          altText: 'Angular 2',
        }
      case 'AngularJS':
        return {
          image: angjsLogo,
          weblink: 'https://angularjs.org/',
          altText: 'AngularJS',
        }
      case 'RXJS':
        return {
          image: rxjsLogo,
          weblink: 'http://reactivex.io/',
          altText: 'RXJS',
        }
      case 'Bootstrap':
        return {
          image: bootstrapLogo,
          weblink: 'https://getbootstrap.com/',
          altText: 'Bootstrap',
        }
      case 'React':
        return {
          image: reactLogo,
          weblink: 'https://reactjs.org',
          altText: 'React',
        }
      case 'Redux':
        return {
          image: reduxLogo,
          weblink: 'https://redux.js.org/',
          altText: 'Redux',
        }
      case 'Gitlab':
        return {
          image: gitlabLogo,
          weblink: 'https://about.gitlab.com/',
          altText: 'Gitlab',
        }
      case 'JQuery':
        return {
          image: jqueryLogo,
          weblink: 'https://jquery.com/',
          altText: 'JQuery',
        }
      case 'HTML5':
        return {
          image: html5Logo,
          weblink:
            'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
          altText: 'HTML5',
        }
      case 'CSS3':
        return {
          image: css3Logo,
          weblink: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          altText: 'CSS3',
        }
      case 'SASS':
        return {
          image: sassLogo,
          weblink: 'https://sass-lang.com/',
          altText: 'SASS',
        }

      case 'WordPress':
        return {
          image: wpLogo,
          weblink: 'https://wordpress.org',
          altText: 'WordPress',
        }
      case 'Linux':
        return {
          image: linuxLogo,
          weblink: 'https://linuxfoundation.org/',
          altText: 'Linux',
        }
      case 'JavaScript':
        return {
          image: jsLogo,
          weblink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          altText: 'JavaScript',
        }
      default:
        return {
          image: whammyDude,
          weblink: 'https://en.wikipedia.org/wiki/Whammy',
          altText: 'whammy',
        }
    }
  }

  return (
    <React.Fragment>
      <div className="techCard">
        <a
          href={renderSwitch(tech).weblink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="techCard__iconArea">
            <div className="techCard__icon">
              <GatsbyImage
                image={getImage(renderSwitch(tech).image)}
                alt={renderSwitch(tech).altText}
              />
            </div>
          </div>
          <div className="techCard__name">{tech}</div>
        </a>
      </div>
    </React.Fragment>
  )
}

TechMiniCard.propTypes = {
  tech: PropTypes.string,
}
export default TechMiniCard
