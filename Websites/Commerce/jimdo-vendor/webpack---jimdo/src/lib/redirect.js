import * as React from "react"
import PropTypes from "prop-types"
import { navigate } from "./history"
import { resolve, insertParams } from "./utils"
import { useBaseContext, useLocationContext } from "./hooks-use-context"

function RedirectRequest(uri) {
  this.uri = uri
}

const isRedirect = o => o instanceof RedirectRequest

const redirectTo = to => {
  throw new RedirectRequest(to)
}

function RedirectImpl(props) {
  const { to, replace = true, state, noThrow, baseuri } = props

  React.useEffect(() => {
    Promise.resolve().then(() => {
      const resolvedTo = resolve(to, baseuri)
      navigate(insertParams(resolvedTo, props), { replace, state })
    })
  }, [])

  const resolvedTo = resolve(to, baseuri)

  if (!noThrow) {
    redirectTo(insertParams(resolvedTo, props))
  }

  return null
}

const Redirect = props => {
  const locationContext = useLocationContext()
  const { baseuri } = useBaseContext()

  return <RedirectImpl {...locationContext} baseuri={baseuri} {...props} />
}

Redirect.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string.isRequired,
}

export { Redirect, isRedirect, redirectTo }
