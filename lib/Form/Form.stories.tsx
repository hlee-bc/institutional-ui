import type { Meta } from "@storybook/react"
import { Form } from "./Form"
import { Input } from "../Input/Input"
import { Button } from "antd"

type FieldType = {
  username?: string
}

const meta = {
  title: "Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Form>

export default meta

export const Primary = {
  args: {
    name: "basic",
    onFinish: (values: FieldType) => {
      alert(JSON.stringify(values))
    },
    children: () => {
      return (
        <div className="flex flex-col justify-center gap-4">
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Input" />
          </Form.Item>
          <Form.Item label={null}>
            <Button htmlType="submit" type="primary" block>
              Submit
            </Button>
          </Form.Item>
        </div>
      )
    },
  },
}
