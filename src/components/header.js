import React from "react"
import { Link } from "gatsby"

const Header = ({ location }) => {
  console.log(location.pathname)

  return (
    <header className="fixed top-0 w-full">
      <div
        // style={{
        //   margin: `0 auto`,
        //   maxWidth: 960,
        //   padding: `1.45rem 1.0875rem`,
        // }}
        className="flex justify-between pt-2 pb-0 px-4 text-5xl"
      >
        <ul className="flex">
          <li
            className={`${
              location.pathname === "/titres" ? "text-myGrey-primary" : ""
            } uppercase pr-5`}
          >
            <Link to="/titres">titre</Link>
          </li>

          <li
            className={`${
              location.pathname === "/auteurs" ? "text-myGrey-primary" : ""
            } uppercase pr-5`}
          >
            <Link to="/auteurs">auteur</Link>
          </li>

          <li
            className={`${
              location.pathname === "/editeurs" ? "text-myGrey-primary" : ""
            } uppercase pr-5`}
          >
            <Link to="/editeurs">éditeur</Link>
          </li>

          <li
            className={`${
              location.pathname === "/collections" ? "text-myGrey-primary" : ""
            } uppercase`}
          >
            <Link to="/collections">collection</Link>
          </li>
        </ul>
        <span className="uppercase">
          <Link to="/a-propos/">à propos</Link>
        </span>
      </div>
    </header>
  )
}

export default Header
