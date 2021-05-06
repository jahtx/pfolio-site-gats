import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import MainLayout from '../layouts/MainLayout/MainLayout'
import Container from 'react-bootstrap/Container'
import '../styles/resumePage.scss'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ResumePage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        accLogo: file(relativePath: { eq: "job-logos/acc-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              height: 24
              placeholder: BLURRED
              formats: [WEBP]
              layout: FIXED
            )
          }
        }
        edLogo: file(relativePath: { eq: "job-logos/edx-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 40
              placeholder: BLURRED
              formats: [WEBP]
              layout: FIXED
            )
          }
        }
        airforceLogo: file(
          relativePath: { eq: "job-logos/airforce-logo.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 40
              placeholder: BLURRED
              formats: [WEBP]
              layout: FIXED
            )
          }
        }
        diligentLogo: file(
          relativePath: { eq: "job-logos/diligent-logo.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 100
              placeholder: BLURRED
              formats: [WEBP]
              layout: FIXED
            )
          }
        }
        rbfcuLogo: file(relativePath: { eq: "job-logos/rbfcu-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 100
              placeholder: BLURRED
              formats: [WEBP]
              layout: FIXED
            )
          }
        }
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
              width: 28
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

  // Job Logos

  const accLogo = data.accLogo
  const edLogo = data.edLogo
  const airforceLogo = data.airforceLogo
  const diligentLogo = data.diligentLogo
  const rbfcuLogo = data.rbfcuLogo

  return (
    <MainLayout pageClasses="resumePage">
      <div class="backgroundTriangles">
        <Container fluid="md">
          <h1 className="mainHeading">Résumé</h1>
          <hr></hr>
        </Container>

        <Container fluid="md">
          <h2 className="resumePage__h2">
            Senior User Experience Designer / Front-end Developer
          </h2>
          <p>
            Intuitive developer and designer for mobile and desktop web
            applications. Application of new development tools, services, and
            methodologies. Dedicated team contributor and coordinator. Explores
            and analyzes industry best practices for user experience and
            front-end development. 10+ years of development experience and 6+
            years of experience with direct-to-consumer products.
          </p>
          <h3>Core Strengths:</h3>
          <ul className="coreStrengths">
            <li>User Interface/User Experience Design</li>
            <li>Front-end Development with React and Angular</li>
            <li>Rapid prototyping</li>
            <li>Product Strategy and Planning</li>
          </ul>
          <hr></hr>
          <h3>Experience:</h3>
          <div className="jobExperience__top">
            <h4>User Experience Designer/Front-end Developer</h4>
            <span className="jobExperience__info">
              Insight Global, San Antonio, TX (2018-2020)
            </span>
          </div>
          <div className="jobExperience__bottom">
            <div className="clientBox">
              <div className="clientBox__left">
                {' '}
                <h5>Client: Accenture / U.S. Department of Education</h5>
              </div>

              <div className="clientBox__right">
                <a
                  href="https://accenture.com/"
                  alt="Accenture"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GatsbyImage
                    className="accLogo"
                    image={getImage(accLogo)}
                    alt="Accenture"
                  />
                </a>
                <a
                  href="https://www.ed.gov/"
                  alt="US Dept of Education"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GatsbyImage
                    className="edLogo"
                    image={getImage(edLogo)}
                    alt="U.S. Department of Education Logo"
                  />
                </a>
              </div>
            </div>
            <p>
              Front-end engineer and designer on a development team for the U.S.
              Department of Education Student Loans web application. The browser
              client required Angular 2 and Bootstrap integration while the
              backend used Java/Spring and Oracle. Augmented and implemented
              designs from UX teams for mobile and desktop screens. Incorporated
              REST APIs using RX.js. Experience with SCRUM Agile methodologies
              utilizing daily stand-ups on 4-week sprints.
            </p>
            <h6>Primary Technologies Used:</h6>
            <div className="jobExperience_tech">
              <a
                href="https://angular.io/"
                alt="Angular"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GatsbyImage image={getImage(angLogo)} alt="Angular 2" />
              </a>
              <a
                href="http://reactivex.io/"
                alt="RxJS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GatsbyImage image={getImage(rxjsLogo)} alt="RXJS" />
              </a>
              <a
                href="https://getbootstrap.com/"
                alt="Bootstrap"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GatsbyImage image={getImage(bootstrapLogo)} alt="Bootstrap" />
              </a>
              <a
                href="https://about.gitlab.com/"
                alt="GitLab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GatsbyImage image={getImage(gitlabLogo)} alt="Gitlab" />
              </a>
            </div>
            <hr className="jobExperience__hr" />
            <div className="clientBox">
              <div className="clientBox__left">
                {' '}
                <h5>Client: Diligent Consulting / U.S. Air Force</h5>
              </div>

              <div className="clientBox__right">
                <a
                  href="https://www.diligent-us.com/"
                  alt="Diligent Consulting"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GatsbyImage
                    className="diligentLogo"
                    image={getImage(diligentLogo)}
                    alt="Diligent Logo"
                  />
                </a>
                <a
                  href="https://www.airforce.com/"
                  alt="U.S. Air Force"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GatsbyImage
                    className="airforceLogo"
                    image={getImage(airforceLogo)}
                    alt="U.S. Air Force"
                  />
                </a>
              </div>
            </div>
            <p>
              The client had previously developed a custom application for the
              U.S. Air Force to manage promotions using an outdated browser
              plug-in (Silverlight). Requisition of a new version, built using
              HTML5 and a modern web framework, required our team to enhance the
              user experience and functionality of the application while
              maintaining previous requirements and capability. Enhanced the
              user interface with industry standard components and developed in
              React/Redux and chief administrator for version control/Git best
              practices.
            </p>
            <h6>Primary Technologies Used:</h6>
            <div className="jobExperience_tech">
              <a href="https://reactjs.org" alt="React">
                <GatsbyImage image={getImage(reactLogo)} alt="React" />
              </a>
              <a href="https://redux.js.org/">
                <GatsbyImage image={getImage(reduxLogo)} alt="Redux" />
              </a>
              <a href="https://getbootstrap.com/" alt="Bootstrap">
                <GatsbyImage image={getImage(bootstrapLogo)} alt="Bootstrap" />
              </a>
            </div>
          </div>
          <div className="jobExperience__top">
            <h4>User Experience Designer/Front-end Developer</h4>
            <span className="jobExperience__info">
              Ampcus Inc, San Antonio, TX (2016-2017)
            </span>
          </div>
          <div className="jobExperience__bottom">
            <div className="clientBox">
              <div className="clientBox__left">
                {' '}
                <h5>Client: Randolph-Brooks Federal Credit Union</h5>
              </div>

              <div className="clientBox__right">
                <a
                  href="https://rbfcu.org"
                  alt="RBFCU"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GatsbyImage
                    className="rbfcuLogo"
                    image={getImage(rbfcuLogo)}
                    alt="RBFCU Logo"
                  />
                </a>
              </div>
            </div>
            <p>
              Led a full user-experience design process from requirements
              gathering to implementation. Fully researched metrics, products,
              and content then prioritized according to user engagement,
              surveys, and executive initiatives. Created wireframes for user
              testing/evaluation and final composites of all major landing
              pages. Structured code environment and templating system
              incorporating modern-SASS/JavaScript libraries and frameworks.
              Operated as senior front-end developer and designer.
            </p>
            <h6>Primary Technologies Used:</h6>
            <div className="jobExperience_tech">
              <a
                href="https://angularjs.org/"
                alt="Angular"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GatsbyImage image={getImage(angjsLogo)} alt="AngularJS" />
              </a>
              <a
                href="https://jquery.com/"
                alt="JQuery"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GatsbyImage image={getImage(jqueryLogo)} alt="JQuery" />
              </a>
              <a
                href="https://sass-lang.com/"
                className="sassLogo"
                alt="CSS 3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GatsbyImage image={getImage(sassLogo)} alt="SASS" />
              </a>
            </div>
          </div>
          <div className="jobExperience__top">
            <h4>Senior Designer and Technology Lead</h4>
            <span className="jobExperience__info">
              Visage Collaborative LLC, San Antonio, TX (2014-2015)
            </span>
          </div>
          <div className="jobExperience__bottom">
            <p>
              As a small team of entrepreneurs motivated to innovate for our
              clients, all of us assumed multiple roles and responsibilities for
              a new business. Guided the design process for our early clients
              and development teams. Project manager and lead developer for web
              application products and other deliverables. Managed AWS/Azure
              hosting production environments. Advocated our business towards
              more profitable and sustainable projects. Sales and engagement
              lead for new clients. Business process manager for
              employee/contractor utilization and accounting.
            </p>
            <h6>Primary Technologies Used:</h6>
            <div className="jobExperience_tech">
              <a
                href="https://wordpress.org"
                alt="WordPress"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GatsbyImage image={getImage(wpLogo)} alt="WordPress" />
              </a>
              <a
                href="https://linuxfoundation.org/"
                alt="Linux Foundation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GatsbyImage image={getImage(linuxLogo)} alt="Linux" />
              </a>
            </div>
          </div>
          <div className="jobExperience__top">
            <h4>Creative Designer I</h4>{' '}
            <span className="jobExperience__info">
              USAA, San Antonio, TX (2010-2014)
            </span>
          </div>

          <div className="jobExperience__bottom">
            <p>
              Executed design process for multiple web and mobile projects
              including USAA’s internal Enterprise Correspondence Tool, a web
              application to facilitate member communication through postal and
              digital channels. Engineered HTML/CSS/JavaScript functional
              wireframing and pair programmed with Java development team. Mobile
              app wireframing and front-end development. Programmed and applied
              A/B testing.
            </p>
            <h6>Primary Technologies Used:</h6>
            <div className="jobExperience_tech">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
                alt="HTML 5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GatsbyImage image={getImage(html5Logo)} alt="HTML 5" />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                alt="CSS 3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GatsbyImage image={getImage(css3Logo)} alt="CSS 3" />
              </a>
              <a
                className="jsLogo"
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                alt="JavaScript"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GatsbyImage image={getImage(jsLogo)} alt="JavaScript" />
              </a>
            </div>
          </div>
          <h4>Operating Systems and Applications:</h4>
          <ul>
            <li>UNIX / Linux</li>
            <li>MacOS / Windows</li>
            <li>Photoshop / Illustrator CC</li>
            <li>Sketch</li>
            <li>Figma</li>
            <li>Invision</li>
            <li>Axure</li>
            <li>SiteSpect</li>
          </ul>
          <h4>Languages and Technologies:</h4>
          <ul>
            <li>Angular 2</li>
            <li>React / Redux</li>
            <li>HTML 5 / CSS 3</li>
            <li>SASS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Git</li>
            <li>AWS</li>
            <li>Digital Ocean</li>
          </ul>
        </Container>
      </div>
    </MainLayout>
  )
}

export default ResumePage
