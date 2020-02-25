import React from "react"
import { azRange } from "../../utils/utils"

const Footer = ({ location }) => {
  const navList = ["titres", "auteurs", "editeurs", "collections"]
  const isCategoryPage = () => navList.includes(location.pathname.slice(1))
  const isHomePage = () => location.pathname === "/"
  return (
    <footer
      className={`fixed bottom-0 w-full text-3xl lg:text-4xl xl:text-5xl ${
        isCategoryPage() ? "" : "border-t border-myGrey-secondary"
      } ${isHomePage() ? "bg-homepage-light" : ""}`}
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
        {!isCategoryPage() && (
          <p className="text-center md:float-right">CONTRIBUTIONS</p>
        )}
      </div>
    </footer>
  )
}

export default Footer
