import React from "react"
import { Link } from "gatsby"
import ThemeToggle from "./theme-toggle"

const NavListItem = ({ location, category }) => {
  // Add the accent for proper display in the navbar
  const categoryName =
    category === "editeurs" ? category.replace("e", "é") : category
  // Check if the current location url matches the category
  const isCurrentLocation = location.pathname === `/${category}`

  return (
    <li className={`${isCurrentLocation ? "text-primary" : ""} pr-5`}>
      <Link to={`/${category}`} className="flex items-center">
        <span className={`${isCurrentLocation ? "inline-block" : "hidden"}`}>
          &#9654;&#xFE0E;
        </span>
        {/* Get rid of the final "s" */}
        <p className="uppercase">{categoryName.slice(0, -1)}</p>
      </Link>
    </li>
  )
}

const Header = ({ location }) => {
  const navList = ["titres", "auteurs", "collections", "editeurs"]
  const isCategoryPage = () => navList.includes(location.pathname.slice(1))
  console.log(isCategoryPage())

  // To position the active page as first menu item on mobile
  const getNavList = () => {
    switch (location.pathname.slice(1)) {
      case "titres":
        return ["titres", "auteurs", "collections", "editeurs"]
      case "auteurs":
        return ["auteurs", "titres", "collections", "editeurs"]
      case "editeurs":
        return ["editeurs", "titres", "auteurs", "collections"]
      case "collections":
        return ["collections", "titres", "auteurs", "editeurs"]
      default:
        return ["titres", "auteurs", "collections", "editeurs"]
    }
  }

  const navigateBack = () => {
    if (location.state !== null) {
      if (location.state !== undefined) {
        return location.state.prevPath !== undefined
          ? location.state.prevPath
          : "/titres"
      } else {
        return "/titres"
      }
    } else {
      return "/titres"
    }
  }

  return (
    <header
      className={`font-headerFooter fixed top-0 w-full ${
        isCategoryPage() ? "" : "border-b border-myGrey-secondary"
      }`}
    >
      <div
        className="flex justify-between flex-row pt-2 pb-0 pr-4 text-3xl lg:text-4xl xl:text-5xl"
        style={{ paddingLeft: "13px" }}
      >
        {/* Back button */}
        {!isCategoryPage() && (
          <div className="categories">
            <Link to={navigateBack()} className="flex items-center">
              <span>&#9664;&#xFE0E;</span>
              <p className="uppercase">répertoire</p>
            </Link>
          </div>
        )}

        {/* Categories nav */}
        <div className="w-full overflow-x-auto">
          {isCategoryPage() && (
            <div className="categories">
              {/* Keep fix navigation menu on desktop */}
              <ul className="hidden md:flex">
                {navList.map(category => (
                  <NavListItem
                    location={location}
                    category={category}
                    key={category}
                  />
                ))}
              </ul>

              {/* Keep active page as first menu item on mobile */}
              <ul className="flex md:hidden">
                {getNavList().map(category => (
                  <NavListItem
                    location={location}
                    category={category}
                    key={category}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Change Theme */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
