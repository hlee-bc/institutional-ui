/* @client-only */
"use client"

import { MainNav } from "@/components/MainNav/MainNav"
import { NavItem } from "@/types/Navigation"
import { Logo } from "./Logo"
import { BrowserRouter } from "react-router-dom"

type HeaderProps = {
  title?: string
  navItems?: NavItem[]
  children?: React.ReactNode
}

export function Header({ title, navItems, children }: HeaderProps) {
  return (
    <div className="flex p-4 items-center">
      <Logo title={title} />
      {navItems && (
        <BrowserRouter>
          <MainNav navItems={navItems} />
        </BrowserRouter>
      )}
      {children}
    </div>
  )
}
