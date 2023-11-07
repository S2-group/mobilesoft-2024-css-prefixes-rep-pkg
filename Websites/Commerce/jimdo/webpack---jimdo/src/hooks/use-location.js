import { useLocationContext } from "../lib/hooks-use-context"

export const useLocation = () => {
  const context = useLocationContext()

  if (!context) {
    throw new Error(
      "useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
    )
  }

  return context.location
}
