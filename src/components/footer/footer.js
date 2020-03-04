import React from "react"
import { Link } from "gatsby"
import { azRange } from "../../utils/utils"

const Footer = ({ location }) => {
  const navList = ["titres", "auteurs", "editeurs", "collections"]
  const isCategoryPage = () => navList.includes(location.pathname.slice(1))
  const isHomePage = () => location.pathname === "/"
  const isAboutPage = () => location.pathname === "/a-propos/"

  return (
    <footer
      className={`font-headerFooter fixed bottom-0 w-full text-3xl lg:text-4xl xxl:text-5xl ${
        isCategoryPage() ? "" : "border-t border-myGrey-secondary"
      } ${isHomePage() ? "bg-homepage-light" : ""} flex justify-between`}
    >
      <div className="px-4 overflow-x-auto">
        {/* Alphabet Nav */}
        {isCategoryPage() &&
          azRange
            .filter(i => i !== "é")
            .map(letter => {
              return (
                <span
                  className="pr-4 md:pr-2 hover:text-myGrey-primary"
                  key={letter}
                >
                  <a href={`#${letter}`}>{letter.toUpperCase()}</a>
                </span>
              )
            })}
        {/* {!isCategoryPage() && (
          <p className="text-center md:float-right">CONTRIBUTIONS</p>
        )} */}
      </div>
      <div className="px-4 hidden md:block">
        <Link
          to="/a-propos/"
          className={`${isAboutPage() ? "text-primary" : ""} uppercase`}
        >
          <span>►</span>
          <span>à propos</span>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
