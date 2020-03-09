import React, { useContext } from "react"
import { Link } from "gatsby"
import ThemeToggle from "../header/theme-toggle"
import { azRange } from "../../utils/utils"
import { GlobalStateContext } from "../../context/global-context-provider"

const Footer = ({ location }) => {
  const navList = ["titres", "auteurs", "editeurs", "collections"]
  const isCategoryPage = () => navList.includes(location.pathname.slice(1))
  const isHomePage = () => location.pathname === "/"
  const isAboutPage = () => location.pathname === "/a-propos/"
  const themeState = useContext(GlobalStateContext)

  return (
    <footer
      className={`fixed font-headerFooter bottom-0 pt-2 w-full text-3xl md:text-xl lg856:text-2xl lg999:text-3xl xl1141:text-4xl xxl:text-5xl flex flex-col md:flex-row md:justify-between md:items-center 
      ${isCategoryPage() ? "" : "border-t border-myGrey-secondary"} 
      ${isHomePage() ? "bg-homepage-light" : ""}`}
    >
      {/* ALPHABET NAV */}
      <div className="block px-4 overflow-x-auto">
        {isCategoryPage() &&
          azRange
            .filter(i => i !== "é")
            .map(letter => {
              return (
                <span
                  className={`pr-4 md:pr-2 ${
                    themeState === "light"
                      ? "hover:text-myBlack"
                      : "hover:text-myGrey-primary"
                  }`}
                  key={letter}
                >
                  <a href={`#${letter}`}>{letter.toUpperCase()}</a>
                </span>
              )
            })}
      </div>
      <div
        className={`flex justify-between pt-2 md:pt-0 
        ${
          isCategoryPage() ? "border-t border-myGrey-secondary" : ""
        } md:border-0`}
      >
        {/* A PROPOS LINK */}
        <div className="pr-4" style={{ paddingLeft: "13px" }}>
          <Link
            to="/a-propos/"
            className={`flex ${isAboutPage() ? "text-primary" : ""}`}
          >
            <span>&#9654;&#xFE0E;</span>
            <p className="uppercase">à propos</p>
          </Link>
        </div>
        {/* THEME TOGGLE */}
        <div className="md:hidden px-4">
          <ThemeToggle />
        </div>
      </div>
    </footer>
  )
}

export default Footer
