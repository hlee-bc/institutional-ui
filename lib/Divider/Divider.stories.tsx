import type { Meta } from "@storybook/react"
import { Divider } from "./Divider"

const meta = {
  title: "Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[14rem]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Divider>

export default meta

export const Primary = {
  args: {},
}

export const Dashed = {
  args: {
    dashed: true,
  },
}

export const WithText = {
  args: {
    children: "With Text",
  },
}
