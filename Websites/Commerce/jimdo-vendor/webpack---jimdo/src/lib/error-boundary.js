// MIT LICENSE - Taken from: https://github.com/tatethurston/react-use-error-boundary/blob/525225a34d4ad50f52b5f5ac8731cdf6999cf8a8/src/index.tsx

import * as React from "react"

class ErrorBoundary extends React.Component {
  displayName = "ReactUseErrorBoundary"

  componentDidCatch(...args) {
    // silence React warning:
    // ErrorBoundary: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI
    this.setState({})
    this.props.onError(...args)
  }

  render() {
    return this.props.children
  }
}

const noop = () => false

const errorBoundaryContext = React.createContext({
  componentDidCatch: { current: undefined },
  error: undefined,
  setError: noop,
})

export function ErrorBoundaryContext({ children }) {
  const [error, setError] = React.useState()
  const componentDidCatch = React.useRef()
  const ctx = React.useMemo(
    () => ({
      componentDidCatch,
      error,
      setError,
    }),
    [error]
  )
  return (
    <errorBoundaryContext.Provider value={ctx}>
      <ErrorBoundary
        error={error}
        onError={(error, errorInfo) => {
          setError(error)
          componentDidCatch.current?.(error, errorInfo)
        }}
      >
        {children}
      </ErrorBoundary>
    </errorBoundaryContext.Provider>
  )
}
ErrorBoundaryContext.displayName = "ReactUseErrorBoundaryContext"

export function withErrorBoundary(WrappedComponent) {
  function WithErrorBoundary(props) {
    return (
      <ErrorBoundaryContext>
        <WrappedComponent key="WrappedComponent" {...props} />
      </ErrorBoundaryContext>
    )
  }
  WithErrorBoundary.displayName = `WithErrorBoundary(${
    WrappedComponent.displayName ?? WrappedComponent.name ?? "Component"
  })`

  return WithErrorBoundary
}

export function useErrorBoundary(componentDidCatch) {
  const ctx = React.useContext(errorBoundaryContext)
  ctx.componentDidCatch.current = componentDidCatch
  const resetError = React.useCallback(() => {
    ctx.setError(undefined)
  }, [])

  return [ctx.error, resetError]
}
