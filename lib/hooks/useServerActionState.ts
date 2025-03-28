import { ServerActionResponse, ServerActionState } from "@/types/ServerAction"
import { useCallback, useMemo, useState, useTransition } from "react"

export function useServerActionState<State>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  serverAction: (
    formData: FormData,
    ...others: Array<any>
  ) => Promise<ServerActionResponse<State>>,
  initialState?: ServerActionResponse<State>
): [
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (formData: FormData, ...others: Array<any>) => void,
  ServerActionState<State>,
] {
  const [isPending, startTransition] = useTransition()

  const [state, setState] = useState<ServerActionResponse<State> | undefined>(
    initialState
  )

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useCallback(
    (formData: FormData, ...others: Array<any>) => {
      startTransition(async () => {
        const response = await serverAction(formData, ...others)
        setState(response)
      })
    },
    [serverAction]
  )

  const reset = useCallback(() => {
    setState(undefined)
  }, [])

  const { isSuccess, data, isError, error } = useMemo(() => {
    return {
      isSuccess: !!state?.data,
      data: state?.data,
      isError: !!state?.error,
      error: state?.error,
    }
  }, [state])

  return [
    dispatch,
    {
      isSuccess,
      data,
      isLoading: isPending,
      isError,
      error,
      reset,
    },
  ]
}
