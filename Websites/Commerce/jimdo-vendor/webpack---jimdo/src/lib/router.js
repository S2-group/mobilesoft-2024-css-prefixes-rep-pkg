import * as React from "react"
import { BaseContext } from "./hooks-create-context"
import { createRoute, pick } from "./utils"
import { FocusHandler } from "./focus-handler"
import { useBaseContext, useLocationContext } from "./hooks-use-context"

export const Router = props => {
  const baseContext = useBaseContext()
  const locationContext = useLocationContext()

  return <RouterImpl {...baseContext} {...locationContext} {...props} />
}

function RouterImpl(props) {
  const {
    location,
    primary = true,
    children,
    basepath,
    baseuri,
    component = "div",
    ...domProps
  } = props

  const routes = React.Children.toArray(children).reduce((array, child) => {
    const routes = createRoute(basepath)(child)
    return array.concat(routes)
  }, [])
  const { pathname } = location
  const match = pick(routes, pathname)

  if (match) {
    const {
      params,
      uri,
      route,
      route: { value: element },
    } = match

    // remove the /* from the end for child routes relative paths
    const normalizedBasePath = route.default
      ? basepath
      : route.path.replace(/\*$/, "")

    const props = {
      ...params,
      uri,
      location,
    }

    const clone = React.cloneElement(
      element,
      props,
      element.props.children ? (
        <Router location={location} primary={primary}>
          {element.props.children}
        </Router>
      ) : undefined
    )

    // using 'div' for < 16.3 support
    const FocusWrapper = primary ? FocusHandler : component
    // don't pass any props to 'div'
    const wrapperProps = primary
      ? { uri, location, component, ...domProps }
      : domProps

    return (
      <BaseContext.Provider
        value={{ baseuri: uri, basepath: normalizedBasePath }}
      >
        <FocusWrapper {...wrapperProps}>{clone}</FocusWrapper>
      </BaseContext.Provider>
    )
  } else {
    return null
  }
}
