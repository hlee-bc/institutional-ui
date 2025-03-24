import type { Meta } from "@storybook/react"

import { Tooltip } from "./Tooltip"
import { Button } from "../Button/Button"

const meta = {
  title: "Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>

export default meta

export const Basic = {
  args: {
    title: "Some content in tooltip",
    children: <Button type="primary">Hover me</Button>,
  },
}
