"use client"

import { Button, Form, Input } from "antd"
import styles from "@/styles/login/Form.module.scss"
import { useServerActionState } from "@/hooks/useServerActionState"
import { useCallback, useEffect, useState } from "react"
import { InputOTP } from "antd-input-otp"
import { AuthActions } from "@/types/Auth"

interface Props {
  token: string
  redirect: string | null
  login: AuthActions["login"]
}

export function InputOTPForm(props: Props) {
  const { token, redirect, login } = props

  const [form] = Form.useForm()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [submit, { error, isLoading, reset }] = useServerActionState<any>(login)

  const [submittable, setSubmittable] = useState(false)

  const handleValueChange = useCallback((formData: { otp: string[] }) => {
    reset()
    const { otp } = formData
    if (
      otp &&
      otp.length === 6 &&
      otp.every((v: string) => v !== "" && !isNaN(Number(v)))
    ) {
      setSubmittable(true)
    } else {
      setSubmittable(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (error) {
      form.setFields([
        {
          name: "otp",
          errors: [error],
        },
      ])
    } else {
      form.setFields([
        {
          name: "otp",
          errors: [],
        },
      ])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])

  return (
    <Form
      layout="vertical"
      className={`${styles["form"]}`}
      form={form}
      onFinish={(formData) => {
        submit({ ...formData, otp: formData.otp?.join("") }, redirect, true)
      }}
      data-testid="otp-form"
      initialValues={{
        token,
      }}
      onValuesChange={handleValueChange}
    >
      <Form.Item name="token" hidden={true}>
        <Input />
      </Form.Item>
      <span className="block text-title3 font-semibold">Input OTP</span>
      <span className="block text-body1 text-darkmode-400 mb-6">
        Enter the verification code from your 2FA device
      </span>
      <Form.Item name="otp" className="mb-3">
        <InputOTP
          inputClassName="!text-title1 !font-light"
          inputType="numeric"
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
