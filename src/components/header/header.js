import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.scss';

const Header = ({ siteTitle }) => (
  <header className="header">
    <h1 style={{ textAlign: "center" }}>
      <Link className="link" to="/">{siteTitle}</Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
