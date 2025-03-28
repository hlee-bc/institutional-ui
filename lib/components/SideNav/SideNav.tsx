import { Menu, MenuProps } from "antd"

type MenuItem = Required<MenuProps>["items"][number]

const items: MenuItem[] = [
  {
    key: "sub1",
    label: "Tasks",
  },
  {
    key: "sub2",
    label: "Tokens",
  },
  {
    type: "divider",
  },
  {
    key: "sub4",
    label: "Trading Instruments",
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
  {
    key: "grp",
    label: "References",
    type: "group",
    children: [
      { key: "13", label: "Option 1" },
      { key: "14", label: "Option 2" },
    ],
  },
]

export const SideNav = () => {
  return (
    <Menu
      onClick={() => {}}
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  )
}
