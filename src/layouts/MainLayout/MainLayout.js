import React from 'react'
import PropTypes from 'prop-types'
import { Header, Footer, Navigation } from '../../components/theme'

/**
 * A functional component with useState
 * Allows modal windows for diplaying full pictures of compositess
 *
 * @param {object} props - react props
 * @param {boolean} props.showVacMsg - if the comp is mobile or not
 */

const MainLayout = ({ showVacMsg, children, pageClasses }) => {
  return (
    <div className={pageClasses}>
      <Header></Header>
      <Navigation></Navigation>
      {children}
      {showVacMsg ? <Footer showVaccineMessage></Footer> : <Footer></Footer>}
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageClasses: PropTypes.node,
  showVacMsg: PropTypes.bool,
}
export default MainLayout
