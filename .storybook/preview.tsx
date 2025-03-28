import type { Preview } from "@storybook/react"
import { ThemeProvider } from "../lib/main"
import React from "react"
import { defaultDarkTheme } from "../lib/themes/default"
import "../lib/index.css"

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme_={defaultDarkTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default preview
