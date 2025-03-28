"use client"

import { User } from "@/types"
import { createContext, ReactNode } from "react"

interface Props {
  user: User | null
  children: ReactNode
}

export const UserProviderContext = createContext<User | null>(null)

export function UserProvider({ user, children }: Props) {
  return (
    <UserProviderContext.Provider value={user}>
      {children}
    </UserProviderContext.Provider>
  )
}
