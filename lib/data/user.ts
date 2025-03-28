import "server-only"

import fromEnv from "@/utils/env.utils"
import { User } from "@/types"
import { jwtDecode } from "jwt-decode"

const { oms } = fromEnv()
const baseUrl = `https://${oms}.altono.app/auth_api/user`

export async function getUser({
  token,
  redirect,
}: {
  token: any
  redirect: () => void
}): Promise<User> {
  const decodedJwt = token && jwtDecode(token)
  const userId =
    typeof decodedJwt === "object" && "i" in decodedJwt && decodedJwt?.i
  try {
    if (!userId) {
      redirect()
    }
    const resp = await fetch(`${baseUrl}/list/${userId}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "alt-auth-token": token?.value,
      } as HeadersInit,
    })
    if (!resp.ok && resp.status === 403) {
      redirect()
    }
    return await resp.json()
  } catch (e) {
    console.error("Fetch user fail", e)
    throw e
  }
}
