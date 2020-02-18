import React from "react"
import { Link } from "gatsby"
import MenuMobile from "./menu-mobile"

const NavListItem = ({ location, category }) => {
  // Add the accent for proper display in the navbar
  const categoryName =
    category === "editeurs" ? category.replace("e", "é") : category
  // Check if the current location url matches the category
  const isCurrentLocation = location.pathname === `/${category}`

  return (
    <li
      className={`${
        isCurrentLocation ? "text-myGrey-primary" : ""
      } uppercase pr-5`}
    >
      <Link to={`/${category}`} className="flex items-center">
        <span className={`${isCurrentLocation ? "inline-block" : "hidden"}`}>
          ►
        </span>
        {/* Get rid of the final "s" */}
        <span className="uppercase">{categoryName.slice(0, -1)}</span>
      </Link>
    </li>
  )
}

const Header = ({ location }) => {
  const navList = ["titres", "auteurs", "editeurs", "collections"]
  const isCategoryPage = () => {
    if (location.pathname === "/") {
      return false
    }
    return navList.includes(location.pathname.slice(1))
  }

  return (
    <header
      className={`md:mb-0 md:fixed top-0 w-full ${
        isCategoryPage() ? "" : "border-b border-myGrey-secondary"
      }`}
    >
      {/* NON-MOBILE MENU */}
      <div className="hidden md:flex justify-between flex-row-reverse pt-2 pb-0 px-4 text-3xl lg:text-4xl xl:text-5xl ">
        {/* A propos nav */}
        <Link to="/a-propos/" className="uppercase">
          à propos
        </Link>

        {/* ReadONlyMemory on Index Page */}
        {location.pathname === "/" && (
          <p className="uppercase text-myGrey-primary">readonlymemory</p>
        )}

        {/* Categories nav */}
        {isCategoryPage() && (
          <div className="categories">
            <ul className="flex">
              {navList.map(category => (
                <NavListItem
                  location={location}
                  category={category}
                  key={category}
                />
              ))}
            </ul>
          </div>
        )}

        {/* Back button */}
        {!isCategoryPage() && location.pathname !== "/" && (
          <div className="categories">
            <Link to="/titres" className="flex items-center">
              <span className="text-myGrey-secondary">&#9664;</span>
              <p className="uppercase">avant</p>
            </Link>
          </div>
        )}
      </div>
      {/* ************************ */}
      {/* MOBILE-MENU */}
      <div className="text-4xl md:hidden">
        {/* Back button */}
        {!isCategoryPage() && location.pathname !== "/" && (
          <div className="categories pb-4 pl-3">
            <Link to="/titres" className="flex items-center">
              <span className="text-myGrey-secondary">&#9664;</span>
              <p className="uppercase">avant</p>
            </Link>
          </div>
        )}
        <MenuMobile />
      </div>
      {/* ************************ */}
    </header>
  )
}

export default Header