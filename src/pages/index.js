import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import MainLayout from '../layouts/MainLayout/MainLayout'
import '../styles/indexPage.scss'
import Container from 'react-bootstrap/Container'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { default as IndexHeroBackground } from '../components/backgrounds/IndexHero'
import { default as SectionUXBackground } from '../components/backgrounds/SectionUX'
import { default as SectionDevBackground } from '../components/backgrounds/SectionDev'

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        workLogos: file(
          relativePath: { eq: "job-logos/work-logo-capsule.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              placeholder: BLURRED
              formats: [WEBP]
              layout: FIXED
              height: 90
              transformOptions: { fit: OUTSIDE, cropFocus: CENTER }
            )
          }
        }
        uxLogos: file(relativePath: { eq: "ux-logos.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              placeholder: BLURRED
              formats: [WEBP]
              layout: FIXED
              height: 140
              transformOptions: { fit: OUTSIDE, cropFocus: CENTER }
            )
          }
        }
        devLogos: file(relativePath: { eq: "dev-logos.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              placeholder: BLURRED
              formats: [WEBP]
              layout: FIXED
              height: 140
              transformOptions: { fit: OUTSIDE, cropFocus: CENTER }
            )
          }
        }
      }
    `
  )

  const workLogos = data.workLogos
  const uxLogos = data.uxLogos
  const devLogos = data.devLogos

  return (
    <MainLayout showVacMsg>
      <IndexHeroBackground>
        <Container fluid="lg" className="pb-2 text-white">
          <h1 className="mainTitle one-pt-8-rem m-0 line-height-25">
            Hi, I'm James, a Product & Services UX Designer and&nbsp;
            <span className="no-break">Front-end</span> Engineer in the San
            Antonio area.
          </h1>

          <div className="hero-section w-100 text-center">
            <p className="script-font one-pt-3-rem mb-3">
              I am passionate about solving complex app design problems from
              conception to deployment to&nbsp;
              <span className="no-break">continuous improvement.</span>
            </p>
          </div>
          <div className="hero-section w-100 text-center">
            <p className="pt-9-rem">
              During my career, I have contributed to efforts for web projects
              for USAA, Accenture, RBFCU, the&nbsp;
              <span className="no-break">U.S. Air Force,</span>&nbsp;and
              the&nbsp;
              <span className="no-break">U.S. Department of Education.</span>
            </p>
          </div>
          <div className="hero-section d-flex justify-content-center align-items-center mb-3">
            <a href="/resume">
              <GatsbyImage
                image={getImage(workLogos)}
                alt="Previous Employers"
              />
            </a>
          </div>
        </Container>
      </IndexHeroBackground>

      <SectionUXBackground>
        <Container fluid="lg" className="p-4 d-flex newExplainBox text-white">
          <div className="newExplainBox__part1 d-flex justify-content-center align-items-center">
            <GatsbyImage
              image={getImage(uxLogos)}
              alt="UX Tools and Applications"
            />
          </div>
          <div className="newExplainBox__part2 m-0">
            <h3 className="one-pt-1-rem  mt-0 mb-3 font-weight-bold">
              Current UX Methodology with Industry-leading Tools
            </h3>
            <p className="pt-9-rem">
              I employ a practical and innovative design methodology for
              tackling web application issues. I follow the basic principles of
              user experience as described by UX pioneer Jakob Nielsen,
              including adherence to{' '}
              <a
                href="https://www.nngroup.com/articles/ten-usability-heuristics/"
                target="_blank"
                rel="noopener noreferrer"
              >
                10 usability heuristics
              </a>
              .
            </p>
            <p className="pt-9-rem">
              I am a regular user of Sketch, Invision, Figma, and Adobe Creative
              Cloud and keep&nbsp;<span class="no-break">up-to-date</span> with
              industry trends.
            </p>
          </div>
        </Container>
      </SectionUXBackground>

      <SectionDevBackground>
        <Container fluid="lg" className="p-4 d-flex newExplainBox text-white">
          <div className="newExplainBox__part1 d-flex justify-content-center align-items-center">
            <GatsbyImage image={getImage(devLogos)} alt="Dev Tools" />
          </div>
          <div className="newExplainBox__part2 m-0">
            <h3 className="one-pt-1-rem  mt-0 mb-3 font-weight-bold">
              Modern Development Frameworks and Languages
            </h3>
            <p className="pt-9-rem">
              I started with HTML4 and regular CSS, and have evolved my
              development process to incorporate Node-based libraries and
              JavaScript frameworks including React and Angular. Tools and
              libraries should improve the development lifecycle and facilitate
              the collaboration of teams and stakeholders.
            </p>
          </div>
        </Container>
      </SectionDevBackground>
    </MainLayout>
  )
}

export default IndexPage
