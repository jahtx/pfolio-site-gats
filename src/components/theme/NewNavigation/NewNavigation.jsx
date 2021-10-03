import React, { useState } from 'react';
import './newNavigation.scss';

const NewNavigation = () => {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="new-navigation">
      <button
        className={
          'hamburger hamburger--vortex-r ' + (isActive ? null : 'is-active')
        }
        onClick={handleToggle}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  );
};

export default NewNavigation;
