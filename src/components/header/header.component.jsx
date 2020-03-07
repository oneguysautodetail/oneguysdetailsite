import PropTypes from "prop-types"
import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

import "./header.styles.scss"

const Header = () => (
  <header>
    <div className="links-container">
      <h4>
        <AnchorLink href='#footer'>
          Contact
        </AnchorLink>
      </h4>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
