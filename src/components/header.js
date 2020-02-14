import React from "react"
import { Link } from "gatsby"

const NavListItem = ({ location, category }) => {
  // Clean accents as the slug doesn't contain any
  const categorySlug =
    category === "éditeurs" ? category.replace("é", "e") : category
  // Clean accents as the location slug doesn't contain any
  const categoryName =
    category === "éditeurs" ? category.replace("é", "e") : category
  // Check if the current location url matches the category
  const isCurrentLocation = location.pathname === `/${categoryName}`

  return (
    <li
      className={`${
        isCurrentLocation ? "text-myGrey-primary" : ""
      } uppercase pr-5`}
    >
      <Link to={`/${categorySlug}`} className="flex items-center">
        <span className={`${isCurrentLocation ? "inline-block" : "hidden"}`}>
          ►
        </span>
        {/* Get rid of the final "s" */}
        <span className="uppercase">{category.slice(0, -1)}</span>
      </Link>
    </li>
  )
}

const Header = ({ location }) => {
  const navList = ["titres", "auteurs", "éditeurs", "collections"]

  return (
    <header className="fixed top-0 w-full">
      <div className="flex justify-between pt-2 pb-0 px-4 text-5xl">
        <div className="categories">
          <ul className="flex">
            {navList.map(category => (
              <NavListItem location={location} category={category} />
            ))}
          </ul>
        </div>
        <span className="uppercase">
          <Link to="/a-propos/">à propos</Link>
        </span>
      </div>
    </header>
  )
}

export default Header
