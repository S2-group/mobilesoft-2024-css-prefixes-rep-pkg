import * as React from "react"
import { useLocationContext } from "./hooks-use-context"
import { LocationProvider } from "./location-provider"

export const Location = ({ children }) => {
  const context = useLocationContext()

  if (context) {
    return children(context)
  } else {
    return <LocationProvider>{children}</LocationProvider>
  }
}
