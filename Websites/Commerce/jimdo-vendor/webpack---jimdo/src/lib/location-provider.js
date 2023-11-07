import * as React from "react"
import { globalHistory, navigate } from "./history"
import { isRedirect } from "./redirect"
import { LocationContext } from "./hooks-create-context"
import { withErrorBoundary, useErrorBoundary } from "./error-boundary"

export const LocationProvider = withErrorBoundary(
  ({ history = globalHistory, children }) => {
    const { location } = history

    const [context, setContext] = React.useState({ location })
    const [error] = useErrorBoundary()

    React.useEffect(() => {
      history._onTransitionComplete()
    }, [context.location])

    React.useEffect(() => {
      let isCancelled = false
      const unlisten = history.listen(({ location }) => {
        Promise.resolve().then(() => {
          requestAnimationFrame(() => {
            if (!isCancelled) {
              setContext({ location })
            }
          })
        })
      })
      return () => {
        isCancelled = true
        unlisten()
      }
    }, [])

    if (error) {
      if (isRedirect(error)) {
        navigate(error.uri, { replace: true })
      } else {
        throw error
      }
    }

    return (
      <LocationContext.Provider value={context}>
        {typeof children === "function" ? children(context) : children || null}
      </LocationContext.Provider>
    )
  }
)
