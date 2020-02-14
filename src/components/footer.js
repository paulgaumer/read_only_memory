import React from "react"
import { azRange } from "../utils/utils"

const Footer = ({ location }) => {
  const navList = ["titres", "auteurs", "editeurs", "collections"]
  return (
    <footer
      className="fixed bottom-0 w-full text-5xl border-t border-b border-myGrey-secondary"
      style={{ height: "72px" }}
    >
      <div className=" px-4">
        {/* Categories nav */}
        {navList.includes(location.pathname.slice(1)) &&
          azRange
            .filter(i => i !== "é")
            .map(letter => {
              return (
                <span className="pr-2 hover:text-myGrey-primary" key={letter}>
                  <a href={`#${letter}`}>{letter.toUpperCase()}</a>
                </span>
              )
            })}
        {/* {azRange
          .filter(i => i !== "é")
          .map(letter => {
            return (
              <span className="pr-2 hover:text-myGrey-primary" key={letter}>
                <a href={`#${letter}`}>{letter.toUpperCase()}</a>
              </span>
            )
          })} */}
      </div>
    </footer>
  )
}

export default Footer
