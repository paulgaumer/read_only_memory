import React, { useState, useEffect } from "react"
import Switch from "react-switch"
import useDarkMode from "use-dark-mode"

const SwitchExample = () => {
  const darkMode = useDarkMode(false)
  const changeBodyTheme = mode => {
    return mode === "dark" ? darkMode.enable() : darkMode.disable()
  }

  const [isChecked, setIsChecked] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState("dark")

  const handleChange = () => {
    setIsChecked(!isChecked)
    changeBodyTheme(isChecked ? "dark" : "light")
  }

  useEffect(() => {
    if (typeof document !== undefined) {
      const initialTheme = document.body.classList.contains("light-mode")
        ? "light"
        : "dark"
      setSelectedTheme(initialTheme)
      setIsChecked(initialTheme === "light" ? true : false)
    }
  }, [])

  return (
    <label>
      <Switch
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
