import type { Meta } from "@storybook/react"
import { Tabs } from "./Tabs"

const meta = {
  title: "Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>

export default meta

export const Default = {
  args: {
    items: [
      { label: "Tab 1", key: "tab1" },
      { label: "Tab 2", key: "tab2" },
      { label: "Tab 3", key: "tab3" },
    ],
  },
}
