import { Button as AntButton } from "antd"
import type { ButtonProps } from "antd/es/button"

export const Button = ({
  children,
  type = "default",
  ...props
}: ButtonProps) => {
  return (
    <AntButton type={type} {...props}>
      {children}
    </AntButton>
  )
}

export type { ButtonProps }
