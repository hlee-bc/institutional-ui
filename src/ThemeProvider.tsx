import { Theme } from "./themes/types"
import { defaultDarkTheme } from "./themes/default"
import { ConfigProvider } from "antd"

export const ThemeProvider: React.FC<{
  children: React.ReactNode
  theme?: Theme["antdConfig"]
}> = ({ children, theme = defaultDarkTheme }) => {
  return <ConfigProvider theme={theme.themeConfig}>{children}</ConfigProvider>
}
