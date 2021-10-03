import React, { useState } from 'react';
import './newNavigation.scss';

const NewNavigation = () => {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
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
      <div className={'menuDrop ' + (isActive ? null : 'menuDrop--visible')}>
        <nav>
          <ul id="mainMenu">
            <li>
              <a className="gacLink" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="gacLink" href="/portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="gacLink" href="/projects">
                Projects
              </a>
            </li>
            <li>
              <a className="gacLink" href="/resume">
                Résumé
              </a>
            </li>
            <li>
              <a className="gacLink" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NewNavigation;
