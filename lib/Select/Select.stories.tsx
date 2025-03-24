import type { Meta } from "@storybook/react"
import { Select } from "./Select"

const options = [
  { value: 1, label: <span>Option 1</span> },
  { value: 2, label: <span>Option 2</span> },
  { value: 3, label: <span>Option 3</span> },
]

const meta = {
  title: "Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>

export default meta

export const Primary = {
  args: {
    placeholder: "Select",
    defaultValue: options[0].value,
    options,
  },
}

export const Borderless = {
  args: {
    placeholder: "Select",
    variant: "borderless",
    defaultValue: options[0].value,
    options,
  },
}
