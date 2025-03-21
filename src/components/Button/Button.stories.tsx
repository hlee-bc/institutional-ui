import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: "Button",
    type: "primary",
  },
}

export const Default: Story = {
  args: {
    children: "Button",
    type: "default",
  },
}

export const Link: Story = {
  args: {
    children: "Button",
    type: "link",
  },
}

export const Text: Story = {
  args: {
    children: "Button",
    type: "text",
  },
}
