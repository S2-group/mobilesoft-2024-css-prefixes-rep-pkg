import { useBaseContext, useLocationContext } from "./hooks-use-context"
import { resolve, match } from "./utils"

const Match = ({ path, children }) => {
  const { baseuri } = useBaseContext()
  const { location } = useLocationContext()

  const resolvedPath = resolve(path, baseuri)
  const result = match(resolvedPath, location.pathname)
  return children({
    location,
    match: result
      ? {
          ...result.params,
          uri: result.uri,
          path,
        }
      : null,
  })
}

export { Match }
