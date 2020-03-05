// Allows us to keep the state given by React Context on page change
import React from "react"
import GlobalContextProvider from "./src/context/global-context-provider"

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
