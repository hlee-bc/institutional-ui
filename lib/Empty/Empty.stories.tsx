import type { Meta } from "@storybook/react"
import { Empty } from "./Empty"

const meta = {
  title: "Empty",
  component: Empty,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Empty>

export default meta

export const Primary = {
  args: {},
}

export const SimpleImage = {
  args: {
    image: Empty.PRESENTED_IMAGE_SIMPLE,
    description: "No data",
  },
}
