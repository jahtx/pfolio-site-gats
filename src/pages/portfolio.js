import React from "react"

//import Modal from "react-modal"
import Header from "../components/theme/Header/Header"
import Footer from "../components/theme/Footer/Footer"
import Composite from "../components/common/Composite/Composite"
import "../styles/main.scss"

const PortfolioPage = () => {
  return (
    <div id="root">
      <Header></Header>
      <div className="container-lg">
        <Composite title="Boomer" fileName="RBFCU_Auto_Loans-1.png" />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default PortfolioPage
