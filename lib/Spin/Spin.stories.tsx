import type { Meta } from "@storybook/react"
import { Spin } from "./Spin"

const meta = {
  title: "Spin",
  component: Spin,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spin>

export default meta

export const Default = {
  args: {},
}
