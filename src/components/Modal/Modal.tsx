import { Modal as AntdModal, ModalProps as AntdModalProps } from "antd"
import React from "react"

// Create a concrete type
export interface ModalProps extends AntdModalProps {
  // You can add additional props here if needed
}

// Create a concrete component
export const Modal: React.FC<ModalProps> = (props) => {
  return <AntdModal {...props} />
}
