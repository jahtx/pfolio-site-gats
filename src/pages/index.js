import React from "react"
// import { Link } from "gatsby"
import { Header, Footer, Navigation } from "../components/theme"
import "../styles/main.scss"

const IndexPage = () => {
  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>

      <div className="container-lg j-resume">
        <h1>
          James Alvarado Hernandez is a Product & Services UX Designer,
          Front-end Engineer, and breakfast taco aficionado.
        </h1>
        <p>
          Ally for accessibility and inclusiveness. Applications should always
          be created and maintained for a comprehensive audience. Everyone
          should be invited! 🥳
        </p>
        <p>
          Applications should apply the best new technologies where they enhance
          maintainability and function. Angular and React are excellent tools,
          but the web is ultimately delivered as HTML, CSS, and plain
          JavaScript. Our job is to reduce complexity wherever we can.
        </p>
        <p>Based in San Antonio, TX. Available to work remotely.</p>

        <p>
          As an efficient and effective UX designer, James has done work for
          Accenture, RBFCU, IBM, and USAA. He prefers Agile/SCRUM methodologies
          and diverse, expressive teams.
        </p>
        <h3>Why James Would Be Great For Your Project</h3>
        <ul>
          <li>Industry experience with high-profile projects</li>
          <li>
            Excellent integration with front-end and back-end development teams
          </li>
          <li>
            Proactive communication with stakeholders, analysts, and other
            essential collaborators
          </li>
        </ul>
        <h3>UX Effectiveness with Front-end Development</h3>
        <p>
          James develops high-fidelity wireframes for nicely effective UX
          deliverables. Engineering prototypes in React or Angular allows a
          demonstration of best UX outcomes given project constraints and
          budgets.
        </p>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default IndexPage

// Goal: The purpose of this page is to have an index.
//
// 1. What is the best way to architect this? If this page has <App>,
// where do I place the content?
