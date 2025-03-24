import type { Meta } from "@storybook/react"

import { ThemeProvider } from "@/ThemeProvider"
import { defaultLightTheme } from "@/themes/default"

import { InputNumber } from "./InputNumber"

const meta = {
  title: "InputNumber",
  component: InputNumber,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultLightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof InputNumber>

export default meta

export const Primary = {
  args: {
    placeholder: "Primary",
  },
}
