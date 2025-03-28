/* @client-only */
"use client"

import { Theme } from "../themes/types"
import { defaultDarkTheme } from "../themes/default"
import { ConfigProvider, App, theme } from "antd"
import React from "react"
import lodash from "lodash"

export const ThemeProvider: React.FC<{
  children: React.ReactNode
  theme_?: Theme["antdConfig"]
}> = ({ children, theme_ = defaultDarkTheme }) => {
  return (
    <ConfigProvider
      theme={lodash.merge(
        {
          ...(theme_.themeAlgo === "dark"
            ? { algorithm: theme.darkAlgorithm }
            : {}),
        },
        theme_.themeConfig
      )}
    >
      <App>{children}</App>
    </ConfigProvider>
  )
}
