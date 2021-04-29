import React from 'react'
import MainLayout from '../layouts/MainLayout/MainLayout'
import Container from 'react-bootstrap/Container'
import '../styles/resumePage.scss'

const ResumePage = () => {
  return (
    <MainLayout pageClasses="resumePage general">
      <Container fluid="sm">
        <h1>Résumé</h1>
        <hr></hr>
      </Container>
      <Container>
        <h2 className="resumePage__h2">
          Senior User Experience Designer / Front-end Developer
        </h2>
        <p>
          Intuitive developer and designer for mobile and desktop web
          applications. Application of new development tools, services, and
          methodologies. Dedicated team contributor and coordinator. Explores
          and analyzes industry best practices for user experience and front-end
          development. 10+ years of development experience and 6+ years of
          experience with direct-to-consumer products.
        </p>
        <h3>Core Strengths:</h3>
        <ul className="coreStrengths">
          <li>User Interface/User Experience Design</li>
          <li>Front-end Development with React and Angular</li>
          <li>Rapid prototyping</li>
          <li>Product Strategy and Planning</li>
        </ul>
        <hr></hr>
        <h3>Professional Experience:</h3>
        <h4>
          User Experience Designer/Front-end Developer&mdash;Insight Global, San
          Antonio, TX (2018-2020)
        </h4>
        <p>
          Designing and developing web application for managing promotions for
          the Air Force. Producing wireframes for prototypes and engineering.
          Incorporating user/client consultations and interviews to refine and
          adapt interface. Development for U.S. Department of Education Student
          Loan website, including designing and coding a variety of page flows
          to spec. Clients include{' '}
          <a className="link" href="https://www.accenture.com">
            Accenture
          </a>
          &nbsp;and&nbsp;
          <a className="link" href="https://www.diligent-us.com/">
            Diligent Consulting
          </a>
          .
        </p>

        <ul>
          <li>
            Engineering custom CSS3 and HTML5 to match and adapt to user
            requirements for multiple screens
          </li>
          <li>
            Graphic design with Illustrator/Sketch to refine and coordinate with
            client and user expectations
          </li>
          <li>
            Full React/Redux development to craft custom screens, modals, and
            data retrieval from RESTful APIs
          </li>
        </ul>

        <h4>
          User Experience Designer/Front-end Developer&mdash;Ampcus Inc, San
          Antonio, TX (2016-2017)
        </h4>

        <p>
          Lead User Interface designer for $4M+ effort to redesign and recode
          the primary website for Randolph-Brooks Federal Credit Union (
          <a className="link" href="https://rbfcu.org">
            RBFCU
          </a>
          ). Collaborated in an Agile project management team environment.
          Advocate for accessibility standards.
        </p>
        <ul>
          <li>
            Utilized Sketch and Invision prototypes to present mobile and
            desktop interactions and design
          </li>
          <li>
            Presented best practices to integrate designs from Photoshop and
            Illustrator for front-end development
          </li>
          <li>
            Developed CSS3, HTML5, SVG, and JavaScript solutions for
            interactions and page-flow
          </li>
          <li>
            Customized and applied JavaScript and node packages for integration
            and development with front-end, including Gulp, JQuery, Webpack,
            React/Redux
          </li>
          <li>
            Set-up MacOS/Linux/Windows environments for team development and
            collaboration
          </li>
        </ul>

        <h4>
          User Experience Designer/Front-end Developer&mdash;Visage
          Collaborative LLC, San Antonio, TX (2014-2015)
        </h4>

        <p>
          User interface design consultant for clients with new or existing
          applications. Developed prototypes with Sketch, Invision, Adobe
          Creative Suite and applied to custom client apps, WordPress, and other
          CMS and SaaS products. Developed site maps, use cases, and user flows.
        </p>
        <ul>
          <li>
            HTML5, CSS3, and JavaScript development for all client and internal
            projects
          </li>
          <li>
            DevOps integration with Linux/Windows Server instances with cloud
            services provided by AWS, Azure, Digital Ocean, and WPEngine
          </li>
        </ul>
        <h4>Creative Designer I&mdash;USAA, San Antonio, TX (2010-2014)</h4>
        <p>
          Designer and developer for ArcGIS application correlating members'
          homes with area-mapping capabilities. Primary designer and front-end
          developer for USAA's internal Enterprise Correspondence Tool to
          facilitate member communication by postal and digital channels.
          Developed and deployed A/B tests with SiteSpect. USAA mobile app
          wireframing and mobile web front-end development. Designed and worked
          with development on address change process for members.
        </p>
        <ul>
          <li>
            Developed desktop and mobile web pages with responsive, fluid design
          </li>
          <li>
            Integrated Software-as-a-Service (SaaS) vendor code into custom
            HTML, CSS
          </li>
          <li>
            Created and documented information architecture and interaction
            design through UML
          </li>
        </ul>
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
    </MainLayout>
  )
}

export default ResumePage
