import { ServerActionResponse } from "./ServerAction"

export type LoginActionResponse = ServerActionResponse<{
  use_otp?: boolean
  jwt_token: string
}>

export type AuthActions = {
  login: (
    formData: FormData,
    redirectPath?: string,
    withOTP?: boolean
  ) => Promise<LoginActionResponse>
  logout: () => Promise<void>
}
