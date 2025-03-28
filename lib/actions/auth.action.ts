"use server"

import { z } from "zod"

interface AuthConfig {
  baseUrl: string
  onSetCookie: (name: string, value: string, options: CookieOptions) => void
  onDeleteCookie: (name: string) => void
  onRedirect: (path: string) => void
}

interface CookieOptions {
  httpOnly?: boolean
  path?: string
  secure?: boolean
}

interface LoginResponse {
  data?: {
    jwt_token?: string
    use_otp?: boolean
  }
  error?: string
}

export function createAuthActions(config: AuthConfig) {
  const { baseUrl, onSetCookie, onDeleteCookie, onRedirect } = config

  async function login(
    formData: FormData,
    redirectPath?: string,
    withOTP?: boolean
  ): Promise<LoginResponse> {
    try {
      const parsedCredentials = z
        .object(
          withOTP
            ? {
                otp: z.string().min(6).max(6),
                token: z.string(),
              }
            : {
                username: z.string(),
                password: z.string().min(6),
              }
        )
        .safeParse(formData)

      if (parsedCredentials.success) {
        const res = await fetch(
          `${baseUrl}/auth_api/auth/${withOTP ? "login_otp" : "login"}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        )

        if (res.ok) {
          const data = await res.json()
          if (data?.use_otp) {
            return { data }
          }
          onSetCookie("JWT", data.jwt_token, {
            httpOnly: true,
            path: "/",
            secure: true,
          })
        } else if (/40[0-9]/.test(res.status.toString())) {
          return {
            error: withOTP
              ? "OTP Failed - invalid OTP"
              : "Login Failed - wrong credentials",
          }
        }
      }
    } catch (e) {
      console.error(withOTP ? "OTP error" : "Login error", e)
      throw e
    }

    onRedirect(redirectPath || "/")
    return {}
  }

  async function logout() {
    try {
      onDeleteCookie("JWT")
    } catch (e) {
      console.error("Logout error", e)
      throw e
    }
    onRedirect("/login")
  }

  return {
    login,
    logout,
  }
}
