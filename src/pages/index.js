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
        workLogos: file(relativePath: { eq: "work-logos.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              placeholder: BLURRED
              formats: [WEBP]
              layout: FIXED
              height: 115
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
              height: 130
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
              height: 130
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
    <MainLayout pageClasses="homePage" showVacMsg>
      <IndexHeroBackground>
        <Container fluid="lg" className="pb-2 text-white">
          <h1 className="homePage__mainTitle one-pt-8-rem mt-0 line-height-25">
            Hi, I'm James, a Product & Services UX Designer and{' '}
            <span className="no-break">Front-end</span> Engineer in the San
            Antonio area.
          </h1>
          <div className="homePage__inset">
            With over 10 years experience in design and development for
            established companies and organizations, I can be an excellent
            addition to your team or project! 🙂
          </div>
          <Container fluid="lg" className="prevEmp">
            <div className="prevEmp-left">
              Throughout my career I’ve worked on large efforts for Accenture,
              USAA, RBFCU, U.S. Air Force, and the Department of Education.
              While I’ve specialized in design research, wireframing, and
              development, I have also led teams for requirements gathering,
              user testing, and evaluation.
            </div>
            <div className="prevEmp-right">
              <GatsbyImage
                image={getImage(workLogos)}
                alt="Previous Employers Logos"
              />
            </div>
          </Container>
        </Container>
      </IndexHeroBackground>

      <SectionUXBackground>
        <Container fluid="lg" className="p-3 d-flex newExplainBox text-white">
          <div className="newExplainBox__part1 d-flex justify-content-center align-items-center">
            <GatsbyImage
              image={getImage(uxLogos)}
              alt="UX Tools and Applications"
            />
          </div>
          <div className="newExplainBox__part2 m-0 pr-4">
            <h3 className="one-pt-1-rem  mt-0 mb-2 font-weight-bold">
              Modern UX Methodology with Industry-leading Tools
            </h3>
            <p className="pt-9-rem">
              Sketch, Figma, Invision, Adobe Illustrator, Adobe Photoshop
            </p>
          </div>
        </Container>
      </SectionUXBackground>

      <SectionDevBackground>
        <Container fluid="lg" className="p-3 d-flex newExplainBox text-white">
          <div className="newExplainBox__part1 d-flex justify-content-center align-items-center">
            <GatsbyImage image={getImage(devLogos)} alt="Dev Tools" />
          </div>
          <div className="newExplainBox__part2 m-0 pr-4">
            <h3 className="one-pt-1-rem  mt-0 mb-2 font-weight-bold">
              Programming Frameworks and Languages
            </h3>
            <p className="pt-9-rem">
              React, Gastby, Angular, JQuery, Git, Bootstrap
            </p>
          </div>
        </Container>
      </SectionDevBackground>
    </MainLayout>
  )
}

export default IndexPage
