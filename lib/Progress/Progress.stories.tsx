import type { Meta } from "@storybook/react"

import { Progress } from "./Progress"

const meta = {
  title: "Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>

export default meta

export const Basic = {
  args: {
    type: "dashboard",
    percent: 50,
  },
}
