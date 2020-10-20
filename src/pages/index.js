import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import useDarkMode from "use-dark-mode"
import { GlobalDispatchContext } from "../context/global-context-provider"
import SEO from "../components/seo"
import "../styles/global.scss"

const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
`

const IndexPage = () => {
  const themeDispatch = useContext(GlobalDispatchContext)
  // Setup the switch between dark & light mode
  const darkMode = useDarkMode(false)
  const handleClick = mode => {
    themeDispatch({ type: mode })
    return mode === "dark" ? darkMode.enable() : darkMode.disable()
  }

  return (
    <>
      <SEO title="Home" />
      <Container className="flex flex-col text-3xl lg:text-4xl xl:text-5xl">
        <Link
          to="/titres"
          className="flex flex-col flex-auto block"
          onClick={() => handleClick("dark")}
        >
          <div className="flex-auto w-full bg-homepage-dark">
            <div className="flex justify-center px-4 py-2 border-b border-myGrey-secondary text-secondary md:justify-between">
              <p className="hidden md:block text-myGrey-secondary">OFF</p>
              <p>
                <span>&#9654;&#xFE0E;</span>READONLYMEMORY
              </p>
            </div>
          </div>
        </Link>
        <Link
          to="/titres"
          className="flex flex-col flex-auto block"
          onClick={() => handleClick("light")}
        >
          <div className="flex items-end flex-auto w-full bg-homepage-light text-secondary">
            <div className="flex justify-center flex-auto px-4 py-2 border-t border-myGrey-secondary md:justify-between">
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
