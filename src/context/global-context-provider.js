import React, { useReducer, useEffect } from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

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

const GlobalContextProvider = ({ children }) => {
  const initialState = ""

  // Check document body to get initial theme on site load
  useEffect(() => {
    if (typeof document !== undefined) {
      const initialTheme = document.body.classList.contains("light-mode")
        ? "light"
        : "dark"
      dispatch({ type: initialTheme })
    }
  }, [])

  // The "state" here matches the initialState, until it is changed by the result of the reducer
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
