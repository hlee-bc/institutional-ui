"use client"

import { Popover } from "antd"
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react"

interface UserMenuProviderContextProps {
  isMouseEntered: boolean
  isMenuOpened: boolean
  setIsMenuOpened: Dispatch<SetStateAction<boolean>> | null
}

interface Props {
  children: ReactNode
  menuTrigger: ReactNode
}

export const UserMenuProviderContext =
  createContext<UserMenuProviderContextProps>({
    isMouseEntered: false,
    isMenuOpened: false,
    setIsMenuOpened: null,
  })

export function UserMenuProvider(props: Props) {
  const { children, menuTrigger } = props

  const [isMouseEntered, setIsMouseEntered] = useState<boolean>(false)
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false)

  return (
    <UserMenuProviderContext.Provider
      value={{
        isMouseEntered,
        isMenuOpened,
        setIsMenuOpened,
      }}
    >
      <div
        onMouseEnter={() => setIsMouseEntered(true)}
        onMouseLeave={() => setIsMouseEntered(false)}
      >
        <Popover
          content={children}
          placement="bottomRight"
          trigger="click"
          onOpenChange={(isOpen) => setIsMenuOpened(isOpen)}
        >
          {menuTrigger}
        </Popover>
      </div>
    </UserMenuProviderContext.Provider>
  )
}
