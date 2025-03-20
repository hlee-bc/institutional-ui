import { Select as AntSelect } from "antd"
import type { SelectProps } from "antd/es/select"
export const Select = ({ ...props }: SelectProps) => {
  return <AntSelect {...props} />
}

export type { SelectProps }
