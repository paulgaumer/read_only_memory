import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <ul className="flex">
        <Link to="/titres">
          <li className="uppercase text-white pr-4">titre</li>
        </Link>
        <Link to="/auteurs">
          <li className="uppercase text-white pr-4">auteur</li>
        </Link>
        <Link to="/editeurs">
          <li className="uppercase text-white pr-4">éditeur</li>
        </Link>
        <Link to="/collections">
          <li className="uppercase text-white pr-4">collection</li>
        </Link>
      </ul>
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
