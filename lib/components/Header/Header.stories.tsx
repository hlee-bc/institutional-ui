import type { Meta, StoryObj } from "@storybook/react"
import { Header } from "./Header"
import { UserMenu } from "../UserMenu/UserMenu"
import { UserProvider } from "@/providers/UserProvider"
import { user } from "@/fixtures"

const navItems = [
  { label: "Home", value: "home", disabled: false },
  { label: "About", value: "about", disabled: true },
]

const meta: Meta<typeof Header> = {
  component: Header,
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {
    title: "PMS",
    navItems,
  },
}

export const WithUserMenu: Story = {
  args: {
    title: "PMS",
    navItems,
    children: (
      <UserProvider user={user}>
        <div className="ml-auto">
          <UserMenu />
        </div>
      </UserProvider>
    ),
  },
}
