/* eslint-disable jsx-a11y/anchor-has-content */
import * as React from "react"
import PropTypes from "prop-types"
import { navigate } from "./history"
import { resolve, startsWith, shouldNavigate, shallowCompare } from "./utils"
import { useBaseContext, useLocationContext } from "./hooks-use-context"

let { forwardRef } = React

if (typeof forwardRef === "undefined") {
  forwardRef = C => C
}

const k = () => {}

export const Link = forwardRef(({ innerRef, ...props }, ref) => {
  const { baseuri } = useBaseContext()
  const { location } = useLocationContext()

  const { to, state, replace, getProps = k, ...anchorProps } = props
  const href = resolve(to, baseuri)
  const encodedHref = encodeURI(href)
  const isCurrent = location.pathname === encodedHref
  const isPartiallyCurrent = startsWith(location.pathname, encodedHref)

  return (
    <a
      ref={ref || innerRef}
      aria-current={isCurrent ? "page" : undefined}
      {...anchorProps}
      {...getProps({ isCurrent, isPartiallyCurrent, href, location })}
      href={href}
      onClick={event => {
        if (anchorProps.onClick) anchorProps.onClick(event)
        if (shouldNavigate(event)) {
          event.preventDefault()
          let shouldReplace = replace
          if (typeof replace !== "boolean" && isCurrent) {
            const { key, ...restState } = { ...location.state }
            shouldReplace = shallowCompare({ ...state }, restState)
          }
          navigate(href, {
            state,
            replace: shouldReplace,
          })
        }
      }}
    />
  )
})

Link.displayName = "Link"

Link.propTypes = {
  to: PropTypes.string.isRequired,
}
