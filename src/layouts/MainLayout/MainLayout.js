import React from 'react'
import PropTypes from 'prop-types'
import { Header, Footer, Navigation } from '../../components/theme'
const MainLayout = ({ children, pageClasses }) => {
  return (
    <div className={pageClasses}>
      <Header></Header>
      <Navigation></Navigation>
      {children}
      <Footer></Footer>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageClasses: PropTypes.node,
}
export default MainLayout
