import type { Meta } from "@storybook/react"
import { InputNumber } from "./InputNumber"
import { ThemeProvider } from "../../ThemeProvider"
import { defaultLightTheme } from "../../themes/default"

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
