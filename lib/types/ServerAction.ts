export interface ServerActionState<T> extends ServerActionResponse<T> {
  isSuccess: boolean
  isLoading?: boolean
  isError?: boolean
  reset: () => void
}

export interface ServerActionResponse<T> {
  data?: T
  error?: string
}
