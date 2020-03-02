import React, { useReducer } from "react"
import useDarkMode from "use-dark-mode"

const ThemeSwitcher = () => {
  const darkMode = useDarkMode(false)

  const changeBodyTheme = mode => {
    return mode === "dark" ? darkMode.enable() : darkMode.disable()
  }

  const handleClick = mode => {
    // To change the style off the theme switch
    dispatch({ type: mode })
    // To change the actual theme on the body
    changeBodyTheme(mode)
  }

  // Used "useReducer" to get rid of the asynchronous state issue happening with "useState"
  // -----------------------------------
  const checkBodyTheme = () => {
    if (typeof document !== undefined) {
      return document.body.classList.contains("light-mode") ? "light" : "dark"
    } else {
      return ""
    }
  }

  const initialState = checkBodyTheme()

  function reducer(state, action) {
    switch (action.type) {
      case "light":
        return "light"
      case "dark":
        return "dark"
      default:
        throw new Error()
    }
  }
  const [selectedTheme, dispatch] = useReducer(reducer, initialState)
  // -----------------------------------

  return (
    <div>
      <span
        onClick={() => handleClick("light")}
        className={`${
          selectedTheme === "light" ? "text-primary" : "cursor-pointer"
        }`}
      >
        ON
      </span>
      <span>/</span>
      <span
        onClick={() => handleClick("dark")}
        className={`${
          selectedTheme === "dark" ? "text-primary" : "cursor-pointer"
        }`}
      >
        OFF
      </span>
    </div>
  )
}

export default ThemeSwitcher
