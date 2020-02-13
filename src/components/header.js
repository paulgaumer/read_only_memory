import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className="fixed top-0 w-full bg-black text-white">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
      className="flex justify-between"
    >
      <ul className="flex">
        <Link to="/titres">
          <li className="uppercase pr-4">titre</li>
        </Link>
        <Link to="/auteurs">
          <li className="uppercase pr-4">auteur</li>
        </Link>
        <Link to="/editeurs">
          <li className="uppercase pr-4">éditeur</li>
        </Link>
        <Link to="/collections">
          <li className="uppercase pr-4">collection</li>
        </Link>
      </ul>
      <span className="uppercase">
        <Link to="/a-propos/">à propos</Link>
      </span>
    </div>
  </header>
)

export default Header
