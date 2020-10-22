import React, { useState, useEffect, useContext } from "react"
import Switch from "react-switch"
import useDarkMode from "use-dark-mode"
import { GlobalDispatchContext } from "../../context/global-context-provider"
import { GlobalStateContext } from "../../context/global-context-provider"

const SwitchExample = () => {
  const darkMode = useDarkMode(false)
  const changeBodyTheme = mode => {
    return mode === "dark" ? darkMode.enable() : darkMode.disable()
  }

  // Consumers getting the current state from React Context
  const themeDispatch = useContext(GlobalDispatchContext)
  const themeState = useContext(GlobalStateContext)

  // State of the theme toggle, based on global theme state
  const [isChecked, setIsChecked] = useState(themeState === "light")

  const handleChange = () => {
    // Update state of the toggle
    setIsChecked(!isChecked)
    // Updates the theme on the body, applying theme css class light/dark
    changeBodyTheme(isChecked ? "dark" : "light")
    // Updates the global theme state
    themeDispatch({ type: isChecked ? "dark" : "light" })
  }

  // Get initial toggle state on site load
  useEffect(() => {
    if (typeof document !== undefined) {
      const initialTheme = document.body.classList.contains("light-mode")
        ? "light"
        : "dark"
      setIsChecked(initialTheme === "light" ? true : false)
    }
  }, [])

  return (
    <label htmlFor="themeSwitch">
      <Switch
        id="themeSwitch"
        role="switch"
        onChange={handleChange}
        checked={isChecked}
        offColor="#4A4A4A"
        onColor="#6B6A6B"
        offHandleColor="#121012"
        onHandleColor="#EEEEEF"
        uncheckedIcon={false}
        checkedIcon={false}
      />
    </label>
  )
}

export default SwitchExample
