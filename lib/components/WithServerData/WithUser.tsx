import { getUser } from "@/data/user"
import { UserProvider } from "@/providers/UserProvider"

interface Props {
  children: React.ReactNode
  token: string
  redirect: () => void
}

export async function WithUser({ children, token, redirect }: Props) {
  const user = await getUser({ token, redirect })

  return <UserProvider user={user}>{children}</UserProvider>
}
