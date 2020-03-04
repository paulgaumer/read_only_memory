import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import useDarkMode from "use-dark-mode"
import SEO from "../components/seo"
import "../styles/global.scss"

const Container = styled.div`
  min-height: 100vh;
  min-height: -webkit-fill-available;
`

const IndexPage = () => {
  // Setup the switch between dark & light mode
  const darkMode = useDarkMode(false)
  const handleClick = mode => {
    return mode === "dark" ? darkMode.enable() : darkMode.disable()
  }

  return (
    <>
      <SEO title="Home" />
      <Container className="flex flex-col text-3xl lg:text-4xl xl:text-5xl">
        <Link
          to="/titres"
          className="flex-auto block flex flex-col"
          onClick={() => handleClick("dark")}
        >
          <div className="bg-homepage-dark w-full flex-auto">
            <div className="py-2 px-4 border-b border-myGrey-secondary text-secondary flex justify-center md:justify-between">
              <p className="hidden md:block text-myGrey-secondary">OFF</p>
              <p>
                <span>&#9654;&#xFE0E;</span>READONLYMEMORY
              </p>
            </div>
          </div>
        </Link>
        <Link
          to="/titres"
          className="flex-auto block flex flex-col"
          onClick={() => handleClick("light")}
        >
          <div className="bg-homepage-light w-full flex-auto flex items-end text-secondary">
            <div className="py-2 px-4 border-t border-myGrey-secondary flex-auto flex justify-center md:justify-between">
              <p>
                <span>&#9654;&#xFE0E;</span>
                READONLYMEMORY
              </p>
              <p className="hidden md:block">ON</p>
            </div>
          </div>
        </Link>
      </Container>
    </>
  )
}

export default IndexPage
