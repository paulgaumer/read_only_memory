import React from "react"
import { azRange } from "../utils/utils"

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-black text-white">
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1rem 1.0875rem`,
        }}
      >
        {azRange.map(letter => {
          return (
            <span className="pr-2">
              <a href={`#${letter}`}>{letter.toUpperCase()}</a>
            </span>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer
