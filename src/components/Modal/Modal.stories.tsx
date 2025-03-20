import type { Meta } from "@storybook/react"
import { Modal } from "./Modal"

const meta = {
  title: "Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>

export default meta

export const Basic = {
  title: "Basic Modal",
  open: true,
  children: <p>Basic Modal</p>,
}
