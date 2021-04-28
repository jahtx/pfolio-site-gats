import React from 'react'
import PropTypes from 'prop-types'
import { Header, Footer, Navigation } from '../../components/theme'
const MainLayout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>
      {children}
      <Footer></Footer>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default MainLayout
