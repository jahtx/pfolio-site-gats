import React from "react"
import Header from "../components/theme/Header/Header"
import Body from "../components/theme/Body/Body"
import Footer from "../components/theme/Footer/Footer"
import "../styles/main.scss"

// markup
const IndexPage = () => {
  return (
    <div>
      <Header></Header>
      <div className="container-lg j-common">
        <h1>
          James Alvarado Hernandez is a Product & Services UX Designer,
          Front-end Engineer, and breakfast taco aficionado.
        </h1>
        <p>
          Ally for accessibility and inclusiveness. Applications should always
          be created and maintained for a comprehensive audience. Everyone is
          invited! 🥳
        </p>
        <p>
          Applications should apply the best new technologies where they enhance
          maintainability and function. Angular and React are excellent tools,
          but the web is ultimately delivered as HTML, CSS, and plain
          JavaScript.
        </p>
        <p>Based in San Antonio, TX. Available to work remotely.</p>
        <p className="j-common-marker">This is a test.</p>
        <h2>CV</h2>
        <p>
          As an efficient and effective UX designer, James has done work for
          Accenture, RBFCU, IBM, and USAA.
        </p>
        <h3>Why James Would Be Great For Your Project</h3>
        <ul>
          <li>Industry expeience with high-profile projects</li>
          <li>
            Excellent integration with front-end and back-end development teams
          </li>
          <li>
            Practive communication with stakeholders, analysts, and other
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
