import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
// import styled from "styled-components"
import useDarkMode from "use-dark-mode"
import SEO from "../components/seo"
import "../styles/global.scss"

// const Container = styled.div`
//   min-height: -webkit-fill-available;
//   min-height: 100vh;
// `

const IndexPage = () => {
  // Use JS to handle window height for mobile browsers
  const [windowHeight, setWindowHeight] = useState("")
  useEffect(() => {
    // Check for the presence of window. Needed for SSR.
    if (typeof window !== undefined) {
      setWindowHeight(window.innerHeight)
    }
  }, [])

  // Setup the switch between dark & light mode
  const darkMode = useDarkMode(false)
  const handleClick = mode => {
    return mode === "dark" ? darkMode.enable() : darkMode.disable()
  }

  return (
    <>
      <SEO title="Home" />
      <div
        className="flex flex-col text-3xl lg:text-4xl xl:text-5xl"
        style={{ height: `${windowHeight}px` }}
      >
        <Link
          to="/titres"
          className="flex-auto block flex flex-col"
          onClick={() => handleClick("dark")}
        >
          <div className="bg-homepage-dark w-full flex-auto">
            <div className="py-2 px-4 border-b border-myGrey-secondary flex justify-between">
              <p className="text-myGrey-primary">
                <span>►</span>READONLYMEMORY
              </p>
              <p className="hidden md:block text-myGrey-secondary">NIGHT</p>
            </div>
          </div>
        </Link>
        <Link
          to="/titres"
          className="flex-auto block flex flex-col"
          onClick={() => handleClick("light")}
        >
          <div className="bg-homepage-light w-full flex-auto flex items-end text-myGrey-secondary">
            <div className="py-2 px-4 border-t border-myGrey-secondary flex-auto flex justify-end md:justify-between">
              <p className="hidden md:block">LIGHT</p>
              <p>
                <span>►</span>
                READONLYMEMORY
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default IndexPage
