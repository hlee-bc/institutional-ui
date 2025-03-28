import SkeletonButton from "antd/es/skeleton/Button"
import {
  UserMenuProvider,
  UserMenuProviderContext,
} from "@/providers/UserMenuProvider"
import { Button, Divider } from "antd"
import { useContext, useMemo } from "react"
import { UserProviderContext } from "@/providers/UserProvider"
import { LogoutButton } from "./LogoutButton"
import { AvatarIcon } from "./AvatarIcon"

export function UserMenuFallback() {
  return (
    <div className="ml-auto flex items-center">
      <SkeletonButton active className="mr-4 !w-[80px]" size="small" />
      <SkeletonButton active shape="circle" />
    </div>
  )
}

export function UserInfo() {
  const user = useContext(UserProviderContext)

  const email = useMemo(() => {
    if (user && user.emails.filter((email) => email.is_active).length > 0) {
      return user.emails[0].email
    }
  }, [user])

  return (
    <>
      <span className="text-body2">{user?.username}</span>
      <span className="text-para1 mb-8">{email}</span>
    </>
  )
}

export function UserMenuLabel() {
  const user = useContext(UserProviderContext)
  const { isMenuOpened, isMouseEntered } = useContext(UserMenuProviderContext)
  return (
    <div className="flex items-center text-overline">
      <span>{user?.username}</span>
      <AvatarIcon
        showColoredBorder={isMenuOpened || isMouseEntered}
        className="w-6 h-6 bg-darkmode-800 !ml-4"
      />
    </div>
  )
}

export function UserMenuContent() {
  return (
    <div className="flex flex-col items-center p-3 min-w-[14rem]">
      <AvatarIcon
        className="bg-extend-spotlight w-20 h-20 mb-2"
        showColoredBorder={true}
      />
      <UserInfo />
      <Divider className="!my-3" />
      <LogoutButton logout={() => {}} />
    </div>
  )
}

export function UserMenu() {
  return (
    <UserMenuProvider
      menuTrigger={
        <Button type="text" size="large">
          <UserMenuLabel />
        </Button>
      }
    >
      <UserMenuContent />
    </UserMenuProvider>
  )
}
