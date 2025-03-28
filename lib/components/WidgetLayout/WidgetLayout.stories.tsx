import type { Meta, StoryObj } from "@storybook/react"
import { WidgetLayout } from "./WidgetLayout"

const meta: Meta<typeof WidgetLayout> = {
  component: WidgetLayout,
}

export default meta

type Story = StoryObj<typeof WidgetLayout>

export const Default: Story = {
  args: {},
}
