import type { Meta, StoryObj } from "@storybook/react"
import { Login } from "./Login"
import { ThemeProvider } from "@/providers/ThemeProvider"
import { defaultLightTheme } from "@/themes/default"

const meta: Meta<typeof Login> = {
  component: Login,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme_={defaultLightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Login>

export const Default: Story = {
  args: {
    authActions: {
      login: async () => {
        return { data: { jwt_token: "test" } }
      },
      logout: async () => {},
    },
  },
}
