"use client"

import { Button, Form, Input } from "antd"
import styles from "@/styles/login/Form.module.scss"
import { Dispatch, SetStateAction, useEffect } from "react"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import useFormSubmittable from "@/hooks/useFormSubmittable"
import { useServerActionState } from "@/hooks/useServerActionState"
import { AuthActions } from "@/types/Auth"

interface Props {
  redirect: string | null
  setOTPToken: Dispatch<SetStateAction<string | null>>
  login: AuthActions["login"]
}

export function LoginForm(props: Props) {
  const { redirect, setOTPToken, login } = props

  const [form] = Form.useForm()
  const { values, submittable } = useFormSubmittable(form)

  const [submit, { error, isLoading, reset, data }] = useServerActionState<{
    use_otp?: boolean
    jwt_token: string
  }>(login)

  useEffect(() => {
    if (!!error) {
      form.setFields([
        {
          name: "password",
          errors: [error],
        },
      ])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])

  useEffect(() => {
    reset()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])

  useEffect(() => {
    if (data?.use_otp) {
      setOTPToken(data.jwt_token)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <Form
      layout="vertical"
      className={`${styles["form"]}`}
      form={form}
      onFinish={(formData) => submit(formData, redirect)}
      data-testid="login-form"
    >
      <Form.Item
        name="username"
        className="!mb-3"
        rules={[{ required: true }]}
        label="Username"
        validateDebounce={1000}
      >
        <Input
          placeholder="username"
          size="large"
          className="[&>input]:placeholder:italic"
          prefix={<UserOutlined className="!text-base-dark mr-2" />}
          data-testid="username-input"
        />
      </Form.Item>
      <Form.Item
        name="password"
        className="!mb-10"
        rules={[{ required: true }]}
        label="Password"
        validateDebounce={1000}
      >
        <Input.Password
          placeholder="password"
          size="large"
          className="[&>input]:placeholder:italic"
          prefix={<LockOutlined className="!text-base-dark mr-2" />}
          data-testid="password-input"
        />
      </Form.Item>
      <Form.Item className="!mb-3">
        <Button
          htmlType="submit"
          block
          type="primary"
          size="large"
          className="!font-semibold"
          disabled={!!error || !submittable}
          loading={isLoading}
          data-testid="submit"
        >
          Continue
        </Button>
      </Form.Item>
    </Form>
  )
}
