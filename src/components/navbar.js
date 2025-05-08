import React from 'react'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <header className={`navbar-container ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <a
          href="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/19dfd842-9d92-44b9-922b-8283fc496794/2f3d7709-ce75-4173-8a1c-99f84072883b?org_if_sml=1&amp;force_format=original"
          target="_blank"
          rel="noreferrer noopener"
          className="navbar-link"
        >
          <img
            alt={props.logoAlt}
            src={props.logoSrc}
            className="navbar-image1"
          />
        </a>
        <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
          <nav className="navbar-links1">
            <span className="thq-link thq-body-small">{props.link1}</span>
            <span className="thq-link thq-body-small">{props.link2}</span>
            <span className="thq-link thq-body-small">{props.link3}</span>
            <span className="thq-link thq-body-small">{props.link4}</span>
            <span className="thq-link thq-body-small">{props.link5}</span>
          </nav>
          <div className="navbar-buttons1">
            <button className="navbar-action11 thq-button-filled thq-button-animated">
              <span className="thq-body-small">{props.text}</span>
            </button>
            <button className="navbar-action21 thq-button-outline thq-button-animated">
              <span className="thq-body-small">{props.text1}</span>
            </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-nav">
            <div className="navbar-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar-logo"
              />
              <div data-thq="thq-close-menu" className="navbar-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar-links2">
              <span className="thq-link thq-body-small">{props.link1}</span>
              <span className="thq-link thq-body-small">{props.link2}</span>
              <span className="thq-link thq-body-small">{props.link3}</span>
              <span className="thq-link thq-body-small">{props.link4}</span>
              <span className="thq-link thq-body-small">{props.link5}</span>
            </nav>
          </div>
          <div className="navbar-buttons2">
            <button className="thq-button-filled">Login</button>
            <button className="thq-button-outline">Register</button>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar.defaultProps = {
  text1: 'Contact Us',
  link5: 'Contact Us',
  link3: 'Services',
  logoAlt: 'Raje Shivchatrapati Multipurpose Charitable Institute',
  action1: '/',
  link4: 'Events',
  rootClassName: '',
  text: 'Donate us',
  link2: 'About Us',
  link1: 'Home',
  action2: '/about',
  logoSrc: '/rajeshivlogo-1500h.jpg',
}

Navbar.propTypes = {
  text1: PropTypes.string,
  link5: PropTypes.string,
  link3: PropTypes.string,
  logoAlt: PropTypes.string,
  action1: PropTypes.string,
  link4: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  link2: PropTypes.string,
  link1: PropTypes.string,
  action2: PropTypes.string,
  logoSrc: PropTypes.string,
}

export default Navbar
