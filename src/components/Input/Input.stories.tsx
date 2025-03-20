import type { Meta } from "@storybook/react"
import { Input } from "./Input"
import { ThemeProvider } from "../../ThemeProvider"
import { defaultLightTheme } from "../../themes/default"
import { UserOutlined } from "@ant-design/icons"

const meta = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultLightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Input>

export default meta

export const Primary = {
  args: {
    placeholder: "Primary",
  },
}

export const Large = {
  args: {
    placeholder: "Large",
    size: "large",
  },
}

export const WithPrefix = {
  args: {
    placeholder: "With Prefix",
    prefix: <UserOutlined />,
  },
}

export const Password = {
  args: {
    placeholder: "Password",
    type: "password",
  },
}
