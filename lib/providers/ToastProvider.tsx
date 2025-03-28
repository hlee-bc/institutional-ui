"use client"

import useToast from "@/hooks/useToast"
import { ConfigProvider } from "antd"
import { createContext, ReactNode } from "react"

interface Props {
  children: ReactNode
}

interface ToastProviderProps {
  showErrorToast: (
    message: string,
    description: string,
    duration?: number
  ) => void
  showInfoToast: (
    message: string,
    description: string,
    duration?: number
  ) => void
}

export const ToastProviderContext = createContext<ToastProviderProps>({
  showErrorToast: () => undefined,
  showInfoToast: () => undefined,
})

export function ToastProvider({ children }: Props) {
  const { contextHolder, showErrorToast, showInfoToast } = useToast()

  return (
    <ToastProviderContext.Provider
      value={{
        showErrorToast,
        showInfoToast,
      }}
    >
      <ConfigProvider>
        {contextHolder}
        {children}
      </ConfigProvider>
    </ToastProviderContext.Provider>
  )
}
