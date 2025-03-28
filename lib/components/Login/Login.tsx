"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "@/hooks/useSearchParams"
import { LoginForm } from "./LoginForm"
import { InputOTPForm } from "./InputOTPForm"
import { AuthActions } from "@/types/Auth"

export function Login({ authActions }: { authActions: AuthActions }) {
  const searchParams = useSearchParams()
  const redirect = searchParams.get("redirect")
  const invalidToken = searchParams.get("invalidToken")

  const [otpToken, setOTPToken] = useState<string | null>(null)

  useEffect(() => {
    if (invalidToken) {
    }
  }, [invalidToken])

  return (
    <div className="w-[440px] py-5 px-6 bg-base-white rounded-lg">
      {otpToken ? (
        <InputOTPForm
          redirect={redirect}
          token={otpToken}
          login={authActions.login}
        />
      ) : (
        <LoginForm
          redirect={redirect}
          setOTPToken={setOTPToken}
          login={authActions.login}
        />
      )}
    </div>
  )
}
