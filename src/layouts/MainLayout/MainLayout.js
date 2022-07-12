import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer, Navigation } from '../../components/theme';

/**
 * A functional component with useState
 * Allows modal windows for diplaying full pictures of compositess
 *
 * @param {object} props - react props
 * @param {boolean} props.showVacMsg - whether to show vaccination message
 */

const MainLayout = ({ hideFooter, showVacMsg, children, pageClasses }) => {
  return (
    <div className={pageClasses}>
      <Header />
      <Navigation />
      {children}
      {hideFooter ? null : showVacMsg ? (
        <Footer showVaccineMessage />
      ) : (
        <Footer />
      )}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageClasses: PropTypes.node,
  hideFooter: PropTypes.bool,
  showVacMsg: PropTypes.bool,
};
export default MainLayout;
