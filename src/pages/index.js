import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import useDarkMode from "use-dark-mode"
import SEO from "../components/seo"
import "../styles/global.scss"

const Container = styled.div`
  /* min-height: -webkit-fill-available;
  min-height: 100vh; */

  @-webkit-keyframes slideInFromTop {
    0% {
      -webkit-height: 0px;
    }
    50% {
      -webkit-height: 500px;
    }
    100% {
      -webkit-height: ${props => props.windowHeight + "px"};
    }
  }

  @keyframes slideInFromTop {
    0% {
      height: 0px;
    }
    100% {
      height: ${props => props.windowHeight + "px"};
    }
  }

  -webkit-animation-name: slideInFromTop;
  -webkit-animation-duration: 1.5s;
  -webkit-animation-timing-function: ease-out;
  -webkit-animation-delay: 0s;
  -webkit-animation-iteration-count: 1;
  -webkit-animation-fill-mode: forwards;
  animation: slideInFromTop 1.5s ease-out 0s 1 forwards;
`

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
      <Container
        className="flex flex-col text-3xl lg:text-4xl xl:text-5xl"
        // style={{ height: `${windowHeight}px` }}
        windowHeight={windowHeight}
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
      </Container>
    </>
  )
}

export default IndexPage
