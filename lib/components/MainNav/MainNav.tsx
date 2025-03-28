"use client"

import { useLocation } from "react-router-dom"
import { useMemo } from "react"
import { Segmented, ConfigProvider, theme } from "antd"
import { NavItem } from "@/types"

const { useToken } = theme

export const MainNav = ({ navItems }: { navItems: NavItem[] }) => {
  const { token } = useToken()
  const location = useLocation()

  const activeValue = useMemo(() => {
    const paths = location.pathname?.split("/")
    return paths[1]
  }, [location])

  return (
    <div className="ml-8">
      <ConfigProvider
        theme={{
          components: {
            Segmented: {
              itemSelectedBg: "#3B3E46",
              fontSize: token.fontSizeLG,
              lineHeight: 32,
              trackPadding: 0,
              trackBg: token.colorBgBase,
              itemSelectedColor: token.colorText,
              itemHoverBg: token.colorBgElevated,
            },
          },
        }}
      >
        <Segmented
          options={navItems}
          defaultValue={navItems[0].value}
          value={activeValue}
        />
      </ConfigProvider>
    </div>
  )
}
