import type { Meta } from "@storybook/react"
import { Segmented } from "./Segmented"

const meta = {
  title: "Segmented",
  component: Segmented,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Segmented>

export default meta

export const Primary = {
  args: {
    options: ["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"],
  },
}
