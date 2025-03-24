import type { Meta } from "@storybook/react"

import { Popover } from "./Popover"
import { Button } from "../Button/Button"

const meta = {
  title: "Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>

export default meta

export const Basic = {
  args: {
    content: <div>Some content</div>,
    title: "Title",
    children: <Button type="primary">Hover me</Button>,
  },
}
