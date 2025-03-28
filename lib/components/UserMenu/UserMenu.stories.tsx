import type { Meta, StoryObj } from "@storybook/react"
import { UserMenu } from "./UserMenu"
import { UserProvider } from "@/providers/UserProvider"
import { user } from "@/fixtures"

const meta: Meta<typeof UserMenu> = {
  component: UserMenu,
  decorators: [
    (Story) => (
      <UserProvider user={user}>
        <Story />
      </UserProvider>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof UserMenu>

export const Default: Story = {
  args: {},
}
