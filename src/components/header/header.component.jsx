import PropTypes from "prop-types";
import AnchorLink from "react-anchor-link-smooth-scroll"
import Banner from "../../components/banner/banner.component";
import React from "react";

import "./header.styles.scss"

const Header = () => {

  return (
    <header>
      <div className="banner-container">
        <Banner/>
      </div>
      <div className="links-container" >
        <h4>
          <AnchorLink href='#footer'>
            Contact
          </AnchorLink>
        </h4>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
