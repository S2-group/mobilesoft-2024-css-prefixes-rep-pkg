import { useBaseContext } from "../lib/hooks-use-context"
import { match } from "../lib/utils"
import { useLocation } from "./use-location"

export const useParams = () => {
  const context = useBaseContext()

  if (!context) {
    throw new Error(
      "useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
    )
  }

  const location = useLocation()

  const results = match(context.basepath, location.pathname)

  return results ? results.params : null
}
