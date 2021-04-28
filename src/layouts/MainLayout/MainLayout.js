import React from 'react'
import PropTypes from 'prop-types'
import { Header, Footer, Navigation } from '../../components/theme'
const MainLayout = ({ children, pageClass }) => {
  return (
    <div className={pageClass}>
      <Header></Header>
      <Navigation></Navigation>
      {children}
      <Footer></Footer>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageClass: PropTypes.node,
}
export default MainLayout
