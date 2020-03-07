/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <div className="site-bg"></div>
          <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
