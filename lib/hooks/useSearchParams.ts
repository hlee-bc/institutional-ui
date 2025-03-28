import { useState, useEffect } from "react"

export const useSearchParams = () => {
  const [params, setParams] = useState(
    new URLSearchParams(window.location.search)
  )

  useEffect(() => {
    const updateParams = () =>
      setParams(new URLSearchParams(window.location.search))

    window.addEventListener("popstate", updateParams) // Handle back/forward navigation

    return () => window.removeEventListener("popstate", updateParams)
  }, [])

  return params
}
