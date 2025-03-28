import { Form, FormInstance } from "antd"
import { useEffect, useState } from "react"

export default function useFormSubmittable(form: FormInstance) {
  const values = Form.useWatch([], form)
  const [submittable, setSubmittable] = useState(false)

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false))
  }, [form, values])

  return { values, submittable }
}
