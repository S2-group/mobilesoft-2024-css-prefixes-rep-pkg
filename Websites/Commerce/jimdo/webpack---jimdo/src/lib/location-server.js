import * as React from "react"
import { LocationContext } from "./hooks-create-context"

export const ServerLocation = ({ url, children }) => {
  const searchIndex = url.indexOf("?")
  const searchExists = searchIndex > -1
  let pathname
  let search = ""
  const hash = ""

  if (searchExists) {
    pathname = url.substring(0, searchIndex)
    search = url.substring(searchIndex)
  } else {
    pathname = url
  }

  return (
    <LocationContext.Provider
      value={{
        location: {
          pathname,
          search,
          hash,
        },
      }}
    >
      {children}
    </LocationContext.Provider>
  )
}
