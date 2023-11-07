import * as React from "react"

export const FocusHandler = ({ uri, location, component, ...domProps }) => {
  return (
    <FocusHandlerImpl
      {...domProps}
      component={component}
      uri={uri}
      location={location}
    />
  )
}

let focusHandlerCount = 0

const FocusHandlerImpl = ({
  children,
  style,
  component: Comp = "div",
  uri,
  location,
  ...domProps
}) => {
  const focusWrapperRef = React.useRef()
  const initialRenderRef = React.useRef(true)
  const uriRef = React.useRef(uri)
  const pathnameRef = React.useRef(location.pathname)
  const shouldFocusRef = React.useRef(false)

  const _requestFocus = requestNode => {
    if (shouldFocusRef.current && requestNode) {
      requestNode.focus()
    }
  }

  // Initial mount/unmount logic
  React.useEffect(() => {
    focusHandlerCount++
    focus()

    return () => {
      focusHandlerCount--
      if (focusHandlerCount === 0) {
        initialRenderRef.current = true
      }
    }
  }, [])

  // Subsequent navigation logic
  React.useEffect(() => {
    let uriChanged = false
    let pathnameChanged = false

    if (uri !== uriRef.current) {
      uriRef.current = uri
      uriChanged = true
    }

    if (location.pathname !== pathnameRef.current) {
      pathnameRef.current = location.pathname
      pathnameChanged = true
    }

    const navigatedUpToMe = pathnameChanged && location.pathname === uri

    shouldFocusRef.current = uriChanged || navigatedUpToMe

    if (shouldFocusRef.current) {
      focus()
    }
  }, [uri, location])

  const focus = React.useCallback(() => {
    if (process.env.NODE_ENV === "test") {
      // TODO: Check if change for tests still needed
      return
    }

    // Don't focus the <Comp /> on initial render
    if (initialRenderRef.current) {
      initialRenderRef.current = false
    } else {
      _requestFocus(focusWrapperRef.current)
    }
  }, [])

  return (
    <Comp
      style={{ outline: "none", ...style }}
      tabIndex="-1"
      ref={focusWrapperRef}
      {...domProps}
    >
      {children}
    </Comp>
  )
}
