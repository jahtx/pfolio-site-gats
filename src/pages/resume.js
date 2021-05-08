import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import MainLayout from '../layouts/MainLayout/MainLayout'
import TechMiniCard from '../components/common/TechMiniCard/TechMiniCard'
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
      }
    `
  )
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
            <div className="miniCardSection">
              <TechMiniCard tech="Angular" />
              <TechMiniCard tech="RXJS" />
              <TechMiniCard tech="Gitlab" />
              <TechMiniCard tech="SASS" />
              <TechMiniCard tech="HTML5" />
              <TechMiniCard tech="CSS3" />
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
            <h6>Primary Technologies Used:</h6>{' '}
            <div className="miniCardSection">
              <TechMiniCard tech="React" />
              <TechMiniCard tech="Redux" />
              <TechMiniCard tech="Bootstrap" />
              <TechMiniCard tech="SASS" />
              <TechMiniCard tech="HTML5" />
              <TechMiniCard tech="CSS3" />
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
            <h6>Primary Technologies Used:</h6>{' '}
            <div className="miniCardSection">
              <TechMiniCard tech="AngularJS" />
              <TechMiniCard tech="JQuery" />
              <TechMiniCard tech="SASS" />
              <TechMiniCard tech="HTML5" />
              <TechMiniCard tech="CSS3" />
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
            <div className="miniCardSection">
              <TechMiniCard tech="WordPress" />
              <TechMiniCard tech="Linux" />
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
            <div className="miniCardSection">
              <TechMiniCard tech="JQuery" />
              <TechMiniCard tech="SASS" />
              <TechMiniCard tech="HTML5" />
              <TechMiniCard tech="CSS3" />
              <TechMiniCard tech="JavaScript" />
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
