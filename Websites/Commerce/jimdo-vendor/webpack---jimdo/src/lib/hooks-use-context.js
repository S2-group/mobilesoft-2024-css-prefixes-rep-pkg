import * as React from "react"
import { BaseContext, LocationContext } from "./hooks-create-context"

export const useBaseContext = () => React.useContext(BaseContext)
export const useLocationContext = () => React.useContext(LocationContext)
